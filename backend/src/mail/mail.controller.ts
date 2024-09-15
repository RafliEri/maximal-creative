import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('contact')
  async sendContactForm(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('message') message: string,
  ) {
    return await this.mailService.sendContactForm(name, email, message);
  }
}
