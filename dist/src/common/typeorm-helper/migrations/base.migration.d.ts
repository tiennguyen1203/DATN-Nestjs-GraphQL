import { MigrationInterface, QueryRunner } from 'typeorm';
import { BaseTable } from './base.table';
export declare abstract class BaseMigration implements MigrationInterface {
    private queryRunner;
    create(tableName: any, callback: (table: BaseTable) => void): Promise<void>;
    update(tableName: any, callback: (table: BaseTable) => void): Promise<void>;
    drop(table: any): Promise<void>;
    createForeignKeys(tableName: any, table: BaseTable): Promise<void>;
    createIndex(tableName: any, table: BaseTable): Promise<void>;
    abstract run(queryRunner: QueryRunner): any;
    abstract rollback(queryRunner: QueryRunner): any;
    down(queryRunner: QueryRunner): Promise<void>;
    up(queryRunner: QueryRunner): Promise<void>;
}
