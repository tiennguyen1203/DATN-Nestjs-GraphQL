"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseColumn = void 0;
const typeorm_1 = require("typeorm");
class BaseColumn {
    constructor(tableColumn) {
        this.tableColumn = tableColumn;
        this.isIndex = false;
        this.foreignKeys = [];
    }
    length(length) {
        this.tableColumn.length = length;
        return this;
    }
    nullable() {
        this.tableColumn.isNullable = true;
        return this;
    }
    index() {
        this.isIndex = true;
        return this;
    }
    default(value) {
        this.tableColumn.default = value;
        return this;
    }
    foreign(table, column = 'id', onDelete = 'CASCADE', onUpdate = 'CASCADE') {
        this.foreignKeys.push(new typeorm_1.TableForeignKey({
            columnNames: [this.tableColumn.name],
            referencedTableName: table,
            referencedColumnNames: [column],
            onDelete: onDelete,
            onUpdate: onUpdate,
        }));
    }
    unique(value = true) {
        this.tableColumn.isUnique = value;
        return this;
    }
}
exports.BaseColumn = BaseColumn;
//# sourceMappingURL=base.column.js.map