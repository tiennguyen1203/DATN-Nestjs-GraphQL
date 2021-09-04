import { InjectQueryService } from '@nestjs-query/core';
import {
  ArrayConnectionType,
  CRUDResolver,
  CursorConnectionType,
  HookArgs,
  OffsetConnectionType,
} from '@nestjs-query/query-graphql';
import { Query, Resolver } from '@nestjs/graphql';
import { UserDto } from 'src/api/shared/dto/users.dto';
import { ROLE } from 'src/common/constants';
import { Authorize } from 'src/common/decorators/auth.decorator';
import { UserContext } from 'src/common/decorators/user-context-decorator';
import { User } from 'src/db/main-db/entities';
import { UserConnection, UserQuery } from './types';
import { UsersService } from './users.service';

@Resolver(() => User)
@Authorize([ROLE.Superadmin])
export class UsersResolver extends CRUDResolver(UserDto, {
  read: { many: { disabled: true } },
}) {
  constructor(@InjectQueryService(User) readonly userService: UsersService) {
    super(userService);
  }

  @Query(() => UserConnection, { name: 'users' })
  getMany(
    @HookArgs() query: UserQuery,
    @UserContext('email') email: string,
  ): Promise<
    | CursorConnectionType<UserDto>
    | OffsetConnectionType<UserDto>
    | ArrayConnectionType<UserDto>
  > {
    return super.queryMany({
      ...query,
      filter: {
        email: {
          neq: email,
        },
      },
    });
  }
}
