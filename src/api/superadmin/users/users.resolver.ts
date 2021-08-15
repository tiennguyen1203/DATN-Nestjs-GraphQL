import { Args, Query, Resolver } from '@nestjs/graphql';
import { Authorize } from 'src/common/decorators/auth.decorator';
import { User } from 'src/db/main-db/entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
@Authorize()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Query(() => User, { name: 'getUser' })
  async getUser(@Args('id') id: string): Promise<User> {
    return this.usersService.findOneById(id);
  }
}
