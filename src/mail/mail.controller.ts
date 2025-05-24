import { Body, Controller, Get } from '@nestjs/common';

import { Public, ResponseMessage } from 'src/decorator/customize';

import { MailerService } from '@nestjs-modules/mailer';

@Controller('mail')
export class MailController {
  constructor(private mailerService: MailerService) {}

  @Public()
  @Get()
  @ResponseMessage('Test email')
  async handleTestEmail() {
    await this.mailerService.sendMail({
      to: 'namdhse172173@fpt.edu.vn',
      from: '"Support Team" <support@example.com>',
      subject: 'Welcome to Nice App! Confirm your Email',
      template: 'new-job',
    });
  }
}
