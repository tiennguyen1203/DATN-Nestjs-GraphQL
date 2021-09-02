import { InjectQueryService, QueryService } from '@nestjs-query/core';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { Resolver } from '@nestjs/graphql';
import { UserDto } from 'src/api/shared/dto/users.dto';
import { User } from 'src/db/main-db/entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
// @Authorize([ROLE.Superadmin])
export class UsersResolver extends CRUDResolver(UserDto) {
  constructor(
    @InjectQueryService(User) readonly userQueryService: QueryService<User>,
    readonly userService: UsersService,
  ) {
    super(userQueryService);
  }
}
