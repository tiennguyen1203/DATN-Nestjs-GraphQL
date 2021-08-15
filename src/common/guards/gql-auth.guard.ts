import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { IncomingMessage } from 'http';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext): IncomingMessage {
    return GqlExecutionContext.create(context).getContext().req;
  }
  // canActivate(
  //   context: ExecutionContext,
  // ): boolean | Promise<boolean> | Observable<boolean> {
  //   const ctx = GqlExecutionContext.create(context);
  //   const { req } = ctx.getContext();

  //   return super.canActivate(new ExecutionContextHost([req]));
  // }
}
