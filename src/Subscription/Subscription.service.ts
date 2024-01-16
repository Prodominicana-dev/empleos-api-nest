import { Injectable } from "@nestjs/common";
import { Subscription } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { EmailService } from "src/Email/Email.service";
import * as bcrypt from "bcrypt"

@Injectable()
export class SubscriptionService{
    constructor(

        private prisma: PrismaService,
        private emailService: EmailService

        ){}

    async getAllSubscription(): Promise<Subscription[]>{
        return this.prisma.subscription.findMany();
    }

    async getSubscriptionById(id: number): Promise<Subscription|null>{
        return this.prisma.subscription.findUnique({
            where:{ 
                id
            }
        });
    }

    async createSubscription(data: Subscription): Promise<Subscription>{
        const hashedPassword = bcrypt.hashSync(data.password,10)
        data.password = hashedPassword;
        data.registrationDate = new Date();
        try {
            const Subscription = await this.prisma.subscription.create({ data });
      
            const message = "El usuario "+ Subscription.email +" se a suscrito con el nombre: "+Subscription.name;
            const HtmlTemplate = `<!DOCTYPE html>
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
                    <h1 style="color: #333333;">${message}</h1>
                    
                </td>
                </tr>
            </table>
            </body>
            </html>`;

            const from = '"Alerta de Suscripción" <alertaelectronica@prodominicana.gob.do>';
            const to = 'elisaul2314@gmail.com';
            const subject = 'Nueva suscripción creada';
            const html = HtmlTemplate;
      
            await this.emailService.sendEmail(from, to, subject, html);
            console.log('Correo enviado después de crear la suscripción');
      
            return Subscription;
          } catch (error) {
            throw new Error('Error al crear la suscripción: ' + error);
          }
    }

    async updateSubscription(id: number, data: Subscription): Promise<Subscription>{
        return this.prisma.subscription.update({
            where:{
                id
            },
            data
        })
    }

    async deleteSubscription(id: number): Promise<Subscription>{
        return this.prisma.subscription.delete({
            where:{
                id
            }
        });
    }
    
}