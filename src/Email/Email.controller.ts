import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './Email.service';

@Controller('Correo')
export class EmailController {
  constructor(private readonly EmailService: EmailService) {}

  @Post()
  async SendEmail(@Body() Data: any) {
        const {email,name} = Data;
    try {

        const SubscribedMessage = "Te agradecemos que hayas participado "+ name;
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
                <h1 style="color: #333333;">${SubscribedMessage}</h1>
                
            </td>
            </tr>
        </table>
        </body>
        </html>`;

        
        const from = '"Prodominicana Empleos" <alertaelectronica@prodominicana.gob.do>';
        const to = email; 
        const subject = 'Su Postulacion en Prodominicana';
        const html = HtmlTemplate;

        return await this.EmailService.sendEmail(from, to, subject, html);
      
    } catch (error) {
      return 'Error creating the subscription';
    }
  }
}