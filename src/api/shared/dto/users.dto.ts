import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  @IDField(() => ID)
  id!: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  fullName: string;

  @FilterableField()
  role: string;
}
