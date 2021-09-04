import { GqlExecutionContext } from '@nestjs/graphql';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/db/main-db/entities/user.entity';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const UserContext = createParamDecorator(
  (data: string, context: ExecutionContext): User => {
    const ctx = GqlExecutionContext.create(context).getContext();
    const request = ctx.req;
    const user = request.user;

    return data ? user?.[data] : user;
  },
);
