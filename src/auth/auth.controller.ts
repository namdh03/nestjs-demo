import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';

import { Request, Response } from 'express';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { RolesService } from 'src/roles/roles.service';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import { IUser } from 'src/users/users.interface';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private rolesService: RolesService,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @ResponseMessage('Login successfully!')
  @Post('login')
  login(@Req() req: Request & { user: IUser }, @Res({ passthrough: true }) response: Response) {
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
  async getAccount(@User() user: IUser) {
    const temp = await this.rolesService.findOne(user.role._id);
    return {
      ...user,
      permissions: temp?.permissions || [],
    };
  }

  @Public()
  @ResponseMessage('Refresh token successfully!')
  @Get('refresh')
  refreshToken(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
    const refreshToken = request.cookies['refresh_token'] as string;
    return this.authService.processNewToken(refreshToken, response);
  }

  @ResponseMessage('Logout successfully!')
  @Post('logout')
  logout(@User() user: IUser, @Res({ passthrough: true }) response: Response) {
    return this.authService.logout(user, response);
  }
}
