import { Controller, Post, Request, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from './auth/local-auth.guard';
import { User } from './users/entities/user.entity';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: Request & { user: User }) {
    return req.user;
  }
}
