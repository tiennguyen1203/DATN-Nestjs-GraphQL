"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMigration = void 0;
const typeorm_1 = require("typeorm");
const base_table_1 = require("./base.table");
class BaseMigration {
    constructor() {
        this.queryRunner = null;
    }
    async create(tableName, callback) {
        const table = new base_table_1.BaseTable();
        callback(table);
        const newTable = new typeorm_1.Table();
        newTable.name = tableName;
        newTable.columns = table.getNewColumns();
        await this.queryRunner.createTable(newTable);
        await this.createIndex(tableName, table);
        await this.createForeignKeys(tableName, table);
    }
    async update(tableName, callback) {
        const table = new base_table_1.BaseTable();
        callback(table);
        for (const column of table.columnToDeletes) {
            await this.queryRunner.dropColumn(tableName, column);
        }
        if (table.getNewColumns()) {
            await this.queryRunner.addColumns(tableName, table.getNewColumns());
        }
        await this.createIndex(tableName, table);
        await this.createForeignKeys(tableName, table);
    }
    async drop(table) {
        await this.queryRunner.dropTable(table);
    }
    async createForeignKeys(tableName, table) {
        for (const column of table.getForeignKeys()) {
            await this.queryRunner.createForeignKey(tableName, column);
        }
    }
    async createIndex(tableName, table) {
        for (const column of table.getIndexColumns()) {
            const index = new typeorm_1.TableIndex({
                name: `${tableName}-${column.name}Index`,
                columnNames: [column.name],
            });
            await this.queryRunner.createIndex(tableName, index);
        }
    }
    async down(queryRunner) {
        this.queryRunner = queryRunner;
        await this.rollback(queryRunner);
    }
    async up(queryRunner) {
        this.queryRunner = queryRunner;
        await this.run(queryRunner);
    }
}
exports.BaseMigration = BaseMigration;
//# sourceMappingURL=base.migration.js.map