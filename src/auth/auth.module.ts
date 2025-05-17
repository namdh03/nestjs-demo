import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from '../users/users.module';

import { LocalStrategy } from './passport/local.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
