import { Injectable } from "@nestjs/common";
import { suscripcion } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { EmailService } from "src/Correo/Correo.service";
import * as bcrypt from "bcrypt"

@Injectable()
export class SuscripcionService{
    constructor(

        private prisma: PrismaService,
        private emailService: EmailService

        ){}

    async getAllSuscripcion(): Promise<suscripcion[]>{
        return this.prisma.suscripcion.findMany();
    }

    async getSuscripcionById(id: number): Promise<suscripcion>{
        return this.prisma.suscripcion.findUnique({
            where:{
                id
            }
        });
    }

    async createSuscripcion(data: suscripcion): Promise<suscripcion>{
        const hashedPassword = bcrypt.hashSync(data.password,10)
        data.password = hashedPassword;
        try {
            const suscripcion = await this.prisma.suscripcion.create({ data });
      
            const correoSuspcrito = "El usuario "+ suscripcion.email +" se a suscrito con el nombre: "+suscripcion.nombre;
            const Mensaje = `<!DOCTYPE html>
            <html>
            <head>
            <meta charset="utf-8">
            <title>Correo Electrónico</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            
            <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                <tr>
                <td align="center" style="padding: 20px;">
                    <img src="https://prodominicana.gob.do/Imagenes/PD-Logo-RGB-CEI%20Icon.png" alt="Logo de la empresa" width="150" style="display: block;">
                    <h1 style="color: #333333;">${correoSuspcrito}</h1>
                    
                </td>
                </tr>
            </table>
            </body>
            </html>`;

            const from = '"Alerta de Suscripción" <alertaelectronica@prodominicana.gob.do>';
            const to = 'elisaul2314@gmail.com';
            const subject = 'Nueva suscripción creada';
            const html = Mensaje;
      
            await this.emailService.sendEmail(from, to, subject, html);
            console.log('Correo enviado después de crear la suscripción');
      
            return suscripcion;
          } catch (error) {
            throw new Error('Error al crear la suscripción: ' + error);
          }
    }

    async updateSuscripciones(id: number, data: suscripcion): Promise<suscripcion>{
        return this.prisma.suscripcion.update({
            where:{
                id
            },
            data
        })
    }

    async deleteSuscripciones(id: number): Promise<suscripcion>{
        return this.prisma.suscripcion.delete({
            where:{
                id
            }
        });
    }
    
}