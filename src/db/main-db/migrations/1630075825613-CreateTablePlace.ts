import { BaseMigration } from 'src/common/typeorm-helper/migrations/base.migration';
import { QueryRunner } from 'typeorm';

export class CreateTablePlace1630075825613 extends BaseMigration {
  async run(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "postgis"');
    await this.create('place', (table) => {
      table.primaryUuid('id');
      table.string('name').unique();
      table.uuid('ownerId').nullable();
      table.string('city').nullable();
      table.geometry('geolocation').nullable();
      table.createdAt().nullable();
      table.updatedAt().nullable();
    });
  }

  async rollback(): Promise<void> {
    await this.drop('place');
  }
}
