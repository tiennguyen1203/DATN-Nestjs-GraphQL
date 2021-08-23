import { ROLE } from 'src/common/constants';
import { BaseEntity } from 'src/common/typeorm-helper/entities/base.entity';
export declare class User extends BaseEntity {
    fullName: string;
    email: string;
    phoneNumber: string;
    isActive: boolean;
    role: ROLE;
}
