import { ArrayConnectionType, CRUDResolver, CursorConnectionType, OffsetConnectionType } from '@nestjs-query/query-graphql';
import { UserDto } from 'src/api/shared/dto/users.dto';
import { UserQuery } from './types';
import { UsersService } from './users.service';
declare const UsersResolver_base: import("@nestjs-query/query-graphql/dist/src/resolvers/resolver.interface").ResolverClass<UserDto, import("@nestjs-query/core").QueryService<UserDto, import("@nestjs-query/core").DeepPartial<UserDto>, import("@nestjs-query/core").DeepPartial<UserDto>>, CRUDResolver<UserDto, import("@nestjs-query/core").DeepPartial<UserDto>, import("@nestjs-query/core").DeepPartial<UserDto>, Omit<{
    many: {
        disabled: true;
    };
}, "pagingStrategy"> & {
    pagingStrategy: import("@nestjs-query/query-graphql").PagingStrategies.CURSOR;
}, import("@nestjs-query/core").QueryService<UserDto, import("@nestjs-query/core").DeepPartial<UserDto>, import("@nestjs-query/core").DeepPartial<UserDto>>>>;
export declare class UsersResolver extends UsersResolver_base {
    readonly userService: UsersService;
    constructor(userService: UsersService);
    getMany(query: UserQuery, email: string): Promise<CursorConnectionType<UserDto> | OffsetConnectionType<UserDto> | ArrayConnectionType<UserDto>>;
}
export {};
