import { QueryArgsType } from '@nestjs-query/query-graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserDto } from 'src/api/shared/dto/users.dto';
@ArgsType()
export class UserQuery extends QueryArgsType(UserDto) {}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const UserConnection = UserQuery.ConnectionType;
