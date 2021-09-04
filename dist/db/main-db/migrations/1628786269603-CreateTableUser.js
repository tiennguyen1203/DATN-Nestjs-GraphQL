"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUser1628786269603 = void 0;
const base_migration_1 = require("../../../common/typeorm-helper/migrations/base.migration");
class CreateTableUser1628786269603 extends base_migration_1.BaseMigration {
    async run() {
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
    async rollback() {
        await this.drop('users');
    }
}
exports.CreateTableUser1628786269603 = CreateTableUser1628786269603;
//# sourceMappingURL=1628786269603-CreateTableUser.js.map