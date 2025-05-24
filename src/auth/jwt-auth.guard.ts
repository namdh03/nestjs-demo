import { ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { RouteInfo } from '@nestjs/common/interfaces';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

import { Request as ExpressRequest } from 'express';
import { IS_PUBLIC_KEY } from 'src/decorator/customize';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info, context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<ExpressRequest>();

    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw err || new UnauthorizedException('Token is invalid');
    }

    const targetMethod = request.method;
    const targetEndpoint = (request.route as RouteInfo | undefined)?.path;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const permissions = user?.permissions ?? [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    let isExisted = permissions.find(
      (permission: { method: string; apiPath: string | undefined }) =>
        permission.method === targetMethod && permission.apiPath === targetEndpoint,
    );
    if (targetEndpoint?.startsWith('/api/v1/auth')) isExisted = true;

    if (!isExisted) {
      throw new ForbiddenException();
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return user;
  }
}
