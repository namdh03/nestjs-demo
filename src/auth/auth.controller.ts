import { Controller, Post, Request, UseGuards } from '@nestjs/common';

import { Public } from 'src/decorator/customize';
import { IUser } from 'src/users/users.interface';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: Request & { user: IUser }) {
    return this.authService.login(req.user);
  }
}
