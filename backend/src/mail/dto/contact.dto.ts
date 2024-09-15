import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class ContactDto {
  @ApiProperty({ example: 'John Doe Two', description: 'Name of the contact person' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john.doe.two@gmail.com', description: 'Email of the contact person' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Test', description: 'Message content' })
  @IsString()
  message: string;

  @ApiProperty({ example: 'captcha-token-example', description: 'reCAPTCHA token' })
  @IsString()
  captchaToken: string;

  constructor(name: string, email: string, message: string, captchaToken: string) {
    this.name = name;
    this.email = email;
    this.message = message;
    this.captchaToken = captchaToken;
  }
}
