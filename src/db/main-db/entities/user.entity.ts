import { ROLE } from 'src/common/constants';
import { BaseEntity } from 'src/common/typeorm-helper/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
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

  // @Field(() => [Place], { nullable: true })
  // @OneToMany(() => Place, (place) => place.owner)
  // places: Place[];
}
