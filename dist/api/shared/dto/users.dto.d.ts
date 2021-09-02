import { ROLE } from 'src/common/constants';
export declare class UserDto {
    id: string;
    email: string;
    fullName: string;
    role: ROLE;
    phoneNumber: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
