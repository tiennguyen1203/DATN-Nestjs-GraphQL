/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';
import { TableColumn } from 'typeorm';
import { BaseColumn } from './base.column';

export class BaseTable {
  private columns: BaseColumn[] = [];
  private changeIndexColumns: string[] = [];
  public columnToDeletes: string[] = [];

  public getNewColumns() {
    return this.columns.map((column) => column.tableColumn);
  }

  public dropColumn(column) {
    this.columnToDeletes.push(column);
  }

  public getIndexColumns() {
    return this.columns
      .filter((column) => column.isIndex)
      .map((column) => column.tableColumn)
      .concat(
        this.changeIndexColumns.map(
          (c) => new TableColumn({ name: c, type: null }),
        ),
      );
  }

  public getForeignKeys() {
    let foreignKeys = [];
    for (const column of this.columns) {
      foreignKeys = foreignKeys.concat(column.foreignKeys);
    }
    return foreignKeys;
  }

  private getColumnValue(
    intOptions: TableColumnOptions,
    options: Partial<TableColumnOptions> = undefined,
  ) {
    return new BaseColumn(
      new TableColumn({
        ...intOptions,
        ...options,
      }),
    );
  }

  public string(
    name: string,
    length = 255,
    options: Partial<TableColumnOptions> = null,
  ) {
    const column = this.getColumnValue(
      {
        name: name,
        type: 'character varying',
        length: length as unknown as string,
      },
      options,
    );

    this.columns.push(column);
    return column;
  }

  public strings(name: string, options: Partial<TableColumnOptions> = null) {
    const column = this.getColumnValue(
      {
        name: name,
        type: 'character varying',
        isArray: true,
      },
      options,
    );

    this.columns.push(column);
    return column;
  }

  public uuid(name = 'id', options: Partial<TableColumnOptions> = null) {
    const column = this.getColumnValue(
      {
        name: name,
        type: 'uuid',
      },
      options,
    );
    this.columns.push(column);
    return column;
  }

  public primaryUuid(name = 'id', options: Partial<TableColumnOptions> = null) {
    const column = this.getColumnValue(
      {
        name: name,
        type: 'uuid',
        isPrimary: true,
        default: 'uuid_generate_v4()',
      },
      options,
    );
    this.columns.push(column);
    return column;
  }

  public integer(name: string, options: Partial<TableColumnOptions> = null) {
    const column = this.getColumnValue(
      {
        name: name,
        type: 'integer',
      },
      options,
    );
    this.columns.push(column);
    return column;
  }

  public integers(name: string, options: Partial<TableColumnOptions> = null) {
    const column = this.getColumnValue(
      {
        name: name,
        type: 'integer[]',
      },
      options,
    );
    this.columns.push(column);
    return column;
  }

  public double(name: string, options: Partial<TableColumnOptions> = null) {
    const column = this.getColumnValue(
      {
        name: name,
        type: 'double precision',
      },
      options,
    );
    this.columns.push(column);
    return column;
  }

  public timestamp(name: string, options: Partial<TableColumnOptions> = null) {
    const column = this.getColumnValue(
      {
        name: name,
        type: 'timestamp',
      },
      options,
    );
    this.columns.push(column);
    return column;
  }

  public decimal(
    name: string,
    precision = 10,
    scale = 2,
    options: Partial<TableColumnOptions> = null,
  ) {
    const column = this.getColumnValue(
      {
        name: name,
        type: 'decimal',
        precision,
        scale,
      },
      options,
    );
    this.columns.push(column);
    return column;
  }

  public boolean(name: string, options: Partial<TableColumnOptions> = null) {
    const column = this.getColumnValue(
      {
        name: name,
        type: 'boolean',
      },
      options,
    );
    this.columns.push(column);
    return column;
  }

  public jsonb(name: string, options: Partial<TableColumnOptions> = null) {
    const column = this.getColumnValue(
      {
        name: name,
        type: 'jsonb',
      },
      options,
    );
    this.columns.push(column);
    return column;
  }

  public json(name: string, options: Partial<TableColumnOptions> = null) {
    const column = this.getColumnValue(
      {
        name: name,
        type: 'json',
      },
      options,
    );
    this.columns.push(column);
    return column;
  }

  public baseTime() {
    this.createdAt();
    this.updatedAt();
  }

  public createdAt() {
    const column = this.getColumnValue({
      type: 'timestamp',
      name: 'createdAt',
      default: 'now()',
    });
    this.columns.push(column);
    return column;
  }

  public updatedAt() {
    const column = this.getColumnValue({
      type: 'timestamp',
      name: 'updatedAt',
      default: 'now()',
    });
    this.columns.push(column);
    return column;
  }

  public deletedAt() {
    const column = this.getColumnValue({
      type: 'timestamp',
      name: 'deletedAt',
      isNullable: true,
    });
    this.columns.push(column);
    return column;
  }

  public addIndexAlreadyColumn(column: string) {
    this.changeIndexColumns.push(column);
  }
}
