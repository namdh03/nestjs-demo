import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Public } from './decorator/customize';
import { User } from './users/entities/user.entity';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private configService: ConfigService,
    private authService: AuthService,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: Request & { user: User }) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  getProfile(@Request() req: Request & { user: User }) {
    return req.user;
  }
}
