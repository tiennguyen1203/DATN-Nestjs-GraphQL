"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTablePlace1630075825613 = void 0;
const base_migration_1 = require("../../../common/typeorm-helper/migrations/base.migration");
class CreateTablePlace1630075825613 extends base_migration_1.BaseMigration {
    async run(queryRunner) {
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
    async rollback() {
        await this.drop('place');
    }
}
exports.CreateTablePlace1630075825613 = CreateTablePlace1630075825613;
//# sourceMappingURL=1630075825613-CreateTablePlace.js.map