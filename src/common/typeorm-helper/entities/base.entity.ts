import { Field } from '@nestjs/graphql';
import {
  BaseEntity as TypeormEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity extends TypeormEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ nullable: true })
  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @Field({ nullable: true })
  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
