import { User } from 'src/db/main-db/entities/user.entity';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUser(id: string): Promise<User>;
}
