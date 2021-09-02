import { BaseEntity } from 'src/common/typeorm-helper/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('place')
export class Place extends BaseEntity {
  @Column()
  name: string;

  @Column()
  ownerId: string;

  @Column()
  city: string;

  // @Field(() => User, { nullable: true })
  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'ownerId' })
  // owner: User;
}
