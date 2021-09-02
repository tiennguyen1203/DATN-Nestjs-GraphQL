import { BaseMigration } from 'src/common/typeorm-helper/migrations/base.migration';

export class CreateTableUser1628786269603 extends BaseMigration {
  async run(): Promise<void> {
    await this.create('users', (table) => {
      table.primaryUuid('id');
      table.string('email').unique();
      table.string('fullName');
      table.string('role');
      table.string('phoneNumber').nullable();
      table.boolean('isActive').default(true);
      table.createdAt().nullable();
      table.updatedAt().nullable();
    });
  }

  async rollback(): Promise<void> {
    await this.drop('users');
  }
}
