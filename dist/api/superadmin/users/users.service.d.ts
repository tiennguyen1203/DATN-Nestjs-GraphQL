import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { User } from 'src/db/main-db/entities/user.entity';
export declare class UsersService extends TypeOrmQueryService<User> {
}
