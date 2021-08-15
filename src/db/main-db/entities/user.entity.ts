import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { ROLE } from 'src/common/constants';
import { BaseEntity } from 'src/common/typeorm-helper/entities/base.entity';
import { Column, Entity } from 'typeorm';

registerEnumType(ROLE, {
  name: 'ROLE',
});

@ObjectType({ isAbstract: true })
@Entity('users')
export class User extends BaseEntity {
  @Field({ nullable: true })
  @Column()
  fullName: string;

  @Field({ nullable: true })
  @Column()
  email: string;

  @Field({ nullable: true })
  @Column()
  phoneNumber: string;

  @Field({ nullable: true })
  @Column()
  isActive: boolean;

  @Field({ nullable: true })
  @Column()
  role: ROLE;
}
