import { Module } from '@nestjs/common';
import { UsersResolver } from 'src/api/customer/users/users.resolver';
import { UsersService } from 'src/api/customer/users/users.service';

@Module({
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
