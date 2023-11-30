import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './Correo.service';

@Controller('Correo')
export class CorreoController {
  constructor(private readonly EmailService: EmailService) {}

  @Post()
  async SendEmail(@Body() Data: any) {
        const {Correo,Nombre} = Data;
    try {

        const mensajeSuspcrito = "Te agradecemos que hayas participado "+ Nombre;
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
                <h1 style="color: #333333;">${mensajeSuspcrito}</h1>
                
            </td>
            </tr>
        </table>
        </body>
        </html>`;

        
        const from = '"Prodominicana Empleos" <alertaelectronica@prodominicana.gob.do>';
        const to = Correo; 
        const subject = 'Su Postulacion en Prodominicana';
        const html = Mensaje;

        return await this.EmailService.sendEmail(from, to, subject, html);
      
    } catch (error) {
      return 'Error al crear la suscripción';
    }
  }
}