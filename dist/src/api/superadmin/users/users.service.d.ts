import { User } from 'src/db/main-db/entities/user.entity';
export declare class UsersService {
    findOneById(id: string): Promise<User>;
}
