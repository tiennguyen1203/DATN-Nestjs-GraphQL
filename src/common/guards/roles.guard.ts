import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from 'src/db/main-db/entities/user.entity';
import { ROLE } from '../constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const {
      req: { user },
    } = ctx.getContext();

    const existingUser = await User.findOne({ where: { email: user.email } });
    if (!existingUser) {
      return false;
    }
    const roles: ROLE[] =
      this.reflector.get('roles', ctx.getHandler()) ||
      this.reflector.get('roles', ctx.getClass());

    if (roles && !roles.includes(existingUser.role)) {
      return false;
    }

    return true;
  }
}
