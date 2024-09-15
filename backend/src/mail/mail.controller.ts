import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MailService } from './mail.service';
import { ContactDto } from './dto/contact.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('contact')
@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('contact')
  @ApiOperation({ summary: 'Send a contact form message' })
  @ApiBody({ type: ContactDto })
  @ApiResponse({ status: 200, description: 'Message sent successfully' })
  @ApiResponse({ status: 400, description: 'Failed to send message' })
  @UsePipes(new ValidationPipe({ transform: true })) 
  async sendContactForm(@Body() contactDto: ContactDto) {
    const { name, email, message, captchaToken } = contactDto;
    return await this.mailService.sendContactForm(name, email, message, captchaToken);
  }
}
