import { BaseEntity } from 'src/common/typeorm-helper/entities/base.entity';
export declare class Place extends BaseEntity {
    name: string;
    ownerId: string;
    city: string;
}
