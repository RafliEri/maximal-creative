import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendContactForm(name: string, email: string, message: string) {
    const mailOptions = {
      from: email,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      text: `You have a new message from ${name} (${email}): \n\n${message}`,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      return { success: true, message: 'Email sent successfully' };
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'Failed to send email' };
    }
  }
}
