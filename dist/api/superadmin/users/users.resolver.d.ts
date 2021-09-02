import { QueryService } from '@nestjs-query/core';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { UserDto } from 'src/api/shared/dto/users.dto';
import { User } from 'src/db/main-db/entities/user.entity';
import { UsersService } from './users.service';
declare const UsersResolver_base: import("@nestjs-query/query-graphql/dist/src/resolvers/resolver.interface").ResolverClass<UserDto, QueryService<UserDto, import("@nestjs-query/core").DeepPartial<UserDto>, import("@nestjs-query/core").DeepPartial<UserDto>>, CRUDResolver<UserDto, import("@nestjs-query/core").DeepPartial<UserDto>, import("@nestjs-query/core").DeepPartial<UserDto>, import("@nestjs-query/query-graphql").ReadResolverOpts<UserDto>, QueryService<UserDto, import("@nestjs-query/core").DeepPartial<UserDto>, import("@nestjs-query/core").DeepPartial<UserDto>>>>;
export declare class UsersResolver extends UsersResolver_base {
    readonly userQueryService: QueryService<User>;
    readonly userService: UsersService;
    constructor(userQueryService: QueryService<User>, userService: UsersService);
}
export {};
