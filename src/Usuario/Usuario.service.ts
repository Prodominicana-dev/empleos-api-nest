import { Injectable } from "@nestjs/common";
import { usuario } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { EmailService } from "src/Correo/Correo.service";
import * as bcrypt from "bcrypt"

@Injectable()
export class UsuarioService{
    constructor(
        private prisma: PrismaService, 
        private emailService: EmailService
        ){}

    async getAllUsuario(): Promise<usuario[]>{
        return this.prisma.usuario.findMany();
    }

    async getUsuarioById(id: number): Promise<usuario>{
        return this.prisma.usuario.findUnique({
            where:{
                id
            }
        });

    }

    async createUsuario(data: usuario): Promise<usuario>{

        const hashedPassword = bcrypt.hashSync(data.password,10)
        data.password = hashedPassword;

        try {

        const Usuario = await this.prisma.usuario.create({data});

        const correoUsuario = "El Colaborador  "+ Usuario.correo +" se a suscrito con el nombre: "+ Usuario.nombrecompleto;
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
                <h1 style="color: #333333;">${correoUsuario}</h1>
                
            </td>
            </tr>
        </table>
        </body>
        </html>`;

        const from = '"Alerta de Usuario" <alertaelectronica@prodominicana.gob.do>';
        const to = 'elisaul2314@gmail.com';
        const subject = 'Nuevo Usuario creado';
        const html = Mensaje;
  
        await this.emailService.sendEmail(from, to, subject, html);
        console.log('Correo enviado después de crear la suscripción');
  
        return Usuario;
      } catch (error) {
        throw new Error('Error al crear la suscripción: ' + error);
      }
    }

    async updateUsuarios(id: number, data: usuario): Promise<usuario>{
        return this.prisma.usuario.update({
            where:{
                id
            },
            data
        })
    }
    async deleteUsuarios(id: number): Promise<usuario>{
        return this.prisma.usuario.delete({
            where:{
                id
            }
        });
    }
    
}