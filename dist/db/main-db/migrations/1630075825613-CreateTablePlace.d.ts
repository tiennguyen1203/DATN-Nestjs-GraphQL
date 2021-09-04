import { BaseMigration } from 'src/common/typeorm-helper/migrations/base.migration';
import { QueryRunner } from 'typeorm';
export declare class CreateTablePlace1630075825613 extends BaseMigration {
    run(queryRunner: QueryRunner): Promise<void>;
    rollback(): Promise<void>;
}
