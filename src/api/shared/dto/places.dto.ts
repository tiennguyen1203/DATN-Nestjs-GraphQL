import {
  FilterableField,
  IDField,
  PagingStrategies,
  QueryOptions,
  Relation,
} from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { UserDto } from './users.dto';

@ObjectType('Place', { isAbstract: true })
@Relation('owner', () => UserDto)
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET })
export class PlaceDto {
  @IDField(() => ID)
  id!: string;

  @Field()
  name: string;

  @FilterableField()
  ownerId: string;

  @FilterableField()
  city: string;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  createdAt: Date;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  updatedAt: Date;
}
