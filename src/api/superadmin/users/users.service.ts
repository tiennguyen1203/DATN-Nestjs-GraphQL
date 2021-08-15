import { Injectable } from '@nestjs/common';
import { User } from 'src/db/main-db/entities/user.entity';

@Injectable()
export class UsersService {
  findOneById(id: string): Promise<User> {
    return User.findOneOrFail(id);
  }
}
