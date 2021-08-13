import { BaseMigration } from 'src/common/typeorm-helper/migrations/base.migration';

export class CreateTableUser1628786269603 extends BaseMigration {
  async run(): Promise<void> {
    await this.create('users', (table) => {
      table.primaryUuid('id');
      table.string('username').unique(true);
      table.string('email').nullable();
      table.string('fullName');
      table.string('role');
      table.string('phoneNumber').nullable();
      table.boolean('isActive').default(true);
    });
  }

  async rollback(): Promise<void> {
    await this.drop('users');
  }
}
