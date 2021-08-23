import { BaseEntity as TypeormEntity } from 'typeorm';
export declare class BaseEntity extends TypeormEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
