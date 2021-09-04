import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { User } from 'src/db/main-db/entities/user.entity';

@Injectable()
export class UsersService extends TypeOrmQueryService<User> {
  // findOneById(id: string): Promise<User> {
  //   return User.findOneOrFail(id, { relations: ['places'] });
  // }
  // createOne(record) {
  //   return super.createOne(record);
  // }
}
