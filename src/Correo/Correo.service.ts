import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // For secure connection
        auth: {
          user: 'alertaelectronica@prodominicana.gob.do',
          pass: 'Ceird2020.',
        },
        tls: {
          ciphers: 'SSLv3',
          rejectUnauthorized: false, // Necesario solo en algunos casos específicos
        },
      });
  }

  async sendEmail(from: string, to: string, subject: string, html: string): Promise<any> {
    const mailOptions = {
      from, 
      to,
      subject,
      html,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      return info;
    } catch (error) {
      throw new Error('Error al enviar el correo: ' + error);
    }
  }
}
