import { Place } from './place.entity';
import { ROLE } from 'src/common/constants';
import { BaseEntity } from 'src/common/typeorm-helper/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';

@Entity('users')
@ObjectType({ isAbstract: true })
export class User extends BaseEntity {
  @Column()
  fullName!: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  isActive: boolean;

  @Column()
  role: ROLE;

  @OneToMany(() => Place, (place) => place.owner, { lazy: true })
  places: Place[];

  // @Field(() => [Place], { nullable: true })
  // @OneToMany(() => Place, (place) => place.owner)
  // places: Place[];
}
