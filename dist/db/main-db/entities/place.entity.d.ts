import { BaseEntity } from 'src/common/typeorm-helper/entities/base.entity';
import { User } from 'src/db/main-db/entities';
export declare class Place extends BaseEntity {
    name: string;
    ownerId: string;
    city: string;
    owner: User;
}
