import { BaseEntity } from 'src/common/typeorm-helper/entities/base.entity';
import { User } from 'src/db/main-db/entities';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('place')
export class Place extends BaseEntity {
  @Column()
  name: string;

  @Column()
  ownerId: string;

  @Column()
  city: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'ownerId' })
  owner: User;

  // @Field(() => User, { nullable: true })
  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'ownerId' })
  // owner: User;
}
