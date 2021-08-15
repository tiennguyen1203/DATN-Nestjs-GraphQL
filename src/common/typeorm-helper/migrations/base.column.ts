/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { TableColumn, TableForeignKey } from 'typeorm';
import { TableForeignKeyOptions } from 'typeorm/schema-builder/options/TableForeignKeyOptions';

export class BaseColumn {
  public isIndex = false;
  public foreignKeys: TableForeignKeyOptions[] = [];

  // eslint-disable-next-line no-unused-vars
  public constructor(public tableColumn: TableColumn) {}

  public length(length: number) {
    this.tableColumn.length = length as unknown as string;
    return this;
  }

  public nullable() {
    this.tableColumn.isNullable = true;
    return this;
  }

  public index() {
    this.isIndex = true;
    return this;
  }

  public default(value) {
    this.tableColumn.default = value;
    return this;
  }

  public foreign(
    table: string,
    column = 'id',
    onDelete = 'CASCADE',
    onUpdate = 'CASCADE',
  ) {
    this.foreignKeys.push(
      new TableForeignKey({
        columnNames: [this.tableColumn.name],
        referencedTableName: table,
        referencedColumnNames: [column],
        onDelete: onDelete,
        onUpdate: onUpdate,
      }),
    );
  }

  public unique(value = true) {
    this.tableColumn.isUnique = value;
    return this;
  }
}
