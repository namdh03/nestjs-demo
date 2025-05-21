import { Controller, Get, Request } from '@nestjs/common';

import { User } from './users/entities/user.entity';

@Controller()
export class AppController {
  constructor() {}

  @Get('profile')
  getProfile(@Request() req: Request & { user: User }) {
    return req.user;
  }
}
