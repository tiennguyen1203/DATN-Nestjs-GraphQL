import { UserDto } from 'src/api/shared/dto/users.dto';
declare const UserQuery_base: import("@nestjs-query/query-graphql/dist/src/types/query").StaticQueryType<UserDto, import("@nestjs-query/query-graphql").PagingStrategies>;
export declare class UserQuery extends UserQuery_base {
}
export declare const UserConnection: import("@nestjs-query/query-graphql").StaticConnectionType<UserDto, import("@nestjs-query/query-graphql").PagingStrategies>;
export {};
