import { Module } from '@nestjs/common';
import { MailService } from './mail/mail.service';
import { MailController } from './mail/mail.controller';

@Module({
  imports: [],
  controllers: [MailController],
  providers: [MailService],
})
export class AppModule {}
