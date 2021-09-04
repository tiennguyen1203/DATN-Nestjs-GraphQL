import {
  FilterableField,
  IDField,
  PagingStrategies,
  QueryOptions,
  Relation,
} from '@nestjs-query/query-graphql';
import {
  Field,
  GraphQLISODateTime,
  ID,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { ROLE } from 'src/common/constants';
import { PlaceDto } from './places.dto';

registerEnumType(ROLE, {
  name: 'ROLE',
});
@ObjectType('User', { isAbstract: true })
@Relation('places', () => PlaceDto)
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET })
export class UserDto {
  @IDField(() => ID)
  id!: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  fullName: string;

  @FilterableField({ nullable: true })
  role: ROLE;

  @Field()
  phoneNumber: string;

  @FilterableField({ nullable: true })
  isActive: boolean;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  createdAt: Date;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  updatedAt: Date;
}
