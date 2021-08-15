import { Module } from '@nestjs/common';
import { UsersResolver } from 'src/api/member/users/users.resolver';
import { UsersService } from 'src/api/member/users/users.service';

@Module({
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
