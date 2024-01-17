import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { EmailService } from "src/Email/Email.service";
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService{
    constructor(
        private prisma: PrismaService, 
        private emailService: EmailService
        ){}

    async getAllUser(): Promise<User[]>{
        return this.prisma.user.findMany();
    }

    async getUserById(id: number): Promise<User>{
        return this.prisma.user.findUnique({
            where:{
                id
            }
        });

    }

    async createUser(data: User): Promise<User>{

        const hashedPassword = bcrypt.hashSync(data.password,10)
        data.password = hashedPassword;
        data.registrationDate = new Date();

        try {

        const User = await this.prisma.user.create({data});

        const manssage = "El Colaborador  "+ User.email +" se a suscrito con el nombre: "+ User.fullName;
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
                <h1 style="color: #333333;">${manssage}</h1>
                
            </td>
            </tr>
        </table>
        </body>
        </html>`;

        const from = '"Alerta de Usuario" <alertaelectronica@prodominicana.gob.do>';
        const to = 'elisaul2314@gmail.com';
        const subject = 'Nuevo usuario creado';
        const html = HtmlTemplate;
  
        await this.emailService.sendEmail(from, to, subject, html);
        console.log('Email sent after subscription created');
  
        return User;
      } catch (error) {
        throw new Error('Error creating subscription: ' + error);
      }
    }

    async updateUser(id: number, data: User): Promise<User>{
        return this.prisma.user.update({
            where:{
                id
            },
            data
        })
    }
    async deleteUser(id: number): Promise<User>{
        return this.prisma.user.delete({
            where:{
                id
            }
        });
    }
    
}