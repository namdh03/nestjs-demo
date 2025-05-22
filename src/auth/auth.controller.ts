import { Body, Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';

import { Response } from 'express';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import { IUser } from 'src/users/users.interface';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: Request & { user: IUser }, @Res({ passthrough: true }) response: Response) {
    return this.authService.login(req.user, response);
  }

  @Public()
  @ResponseMessage('Register a new user')
  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    const user = await this.authService.register(registerUserDto);
    return {
      _id: user._id,
      createdAt: user.createdAt,
    };
  }

  @ResponseMessage('Register a new user')
  @Get('account')
  getAccount(@User() user: IUser) {
    return user;
  }
}
