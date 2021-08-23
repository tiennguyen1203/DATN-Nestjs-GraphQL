"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTable = void 0;
const typeorm_1 = require("typeorm");
const base_column_1 = require("./base.column");
class BaseTable {
    constructor() {
        this.columns = [];
        this.changeIndexColumns = [];
        this.columnToDeletes = [];
    }
    getNewColumns() {
        return this.columns.map((column) => column.tableColumn);
    }
    dropColumn(column) {
        this.columnToDeletes.push(column);
    }
    getIndexColumns() {
        return this.columns
            .filter((column) => column.isIndex)
            .map((column) => column.tableColumn)
            .concat(this.changeIndexColumns.map((c) => new typeorm_1.TableColumn({ name: c, type: null })));
    }
    getForeignKeys() {
        let foreignKeys = [];
        for (const column of this.columns) {
            foreignKeys = foreignKeys.concat(column.foreignKeys);
        }
        return foreignKeys;
    }
    getColumnValue(intOptions, options = undefined) {
        return new base_column_1.BaseColumn(new typeorm_1.TableColumn(Object.assign(Object.assign({}, intOptions), options)));
    }
    string(name, length = 255, options = null) {
        const column = this.getColumnValue({
            name: name,
            type: 'character varying',
            length: length,
        }, options);
        this.columns.push(column);
        return column;
    }
    strings(name, options = null) {
        const column = this.getColumnValue({
            name: name,
            type: 'character varying',
            isArray: true,
        }, options);
        this.columns.push(column);
        return column;
    }
    uuid(name = 'id', options = null) {
        const column = this.getColumnValue({
            name: name,
            type: 'uuid',
        }, options);
        this.columns.push(column);
        return column;
    }
    primaryUuid(name = 'id', options = null) {
        const column = this.getColumnValue({
            name: name,
            type: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
        }, options);
        this.columns.push(column);
        return column;
    }
    integer(name, options = null) {
        const column = this.getColumnValue({
            name: name,
            type: 'integer',
        }, options);
        this.columns.push(column);
        return column;
    }
    integers(name, options = null) {
        const column = this.getColumnValue({
            name: name,
            type: 'integer[]',
        }, options);
        this.columns.push(column);
        return column;
    }
    double(name, options = null) {
        const column = this.getColumnValue({
            name: name,
            type: 'double precision',
        }, options);
        this.columns.push(column);
        return column;
    }
    timestamp(name, options = null) {
        const column = this.getColumnValue({
            name: name,
            type: 'timestamp',
        }, options);
        this.columns.push(column);
        return column;
    }
    decimal(name, precision = 10, scale = 2, options = null) {
        const column = this.getColumnValue({
            name: name,
            type: 'decimal',
            precision,
            scale,
        }, options);
        this.columns.push(column);
        return column;
    }
    boolean(name, options = null) {
        const column = this.getColumnValue({
            name: name,
            type: 'boolean',
        }, options);
        this.columns.push(column);
        return column;
    }
    jsonb(name, options = null) {
        const column = this.getColumnValue({
            name: name,
            type: 'jsonb',
        }, options);
        this.columns.push(column);
        return column;
    }
    json(name, options = null) {
        const column = this.getColumnValue({
            name: name,
            type: 'json',
        }, options);
        this.columns.push(column);
        return column;
    }
    baseTime() {
        this.createdAt();
        this.updatedAt();
    }
    createdAt() {
        const column = this.getColumnValue({
            type: 'timestamp',
            name: 'createdAt',
            default: 'now()',
        });
        this.columns.push(column);
        return column;
    }
    updatedAt() {
        const column = this.getColumnValue({
            type: 'timestamp',
            name: 'updatedAt',
            default: 'now()',
        });
        this.columns.push(column);
        return column;
    }
    deletedAt() {
        const column = this.getColumnValue({
            type: 'timestamp',
            name: 'deletedAt',
            isNullable: true,
        });
        this.columns.push(column);
        return column;
    }
    addIndexAlreadyColumn(column) {
        this.changeIndexColumns.push(column);
    }
}
exports.BaseTable = BaseTable;
//# sourceMappingURL=base.table.js.map