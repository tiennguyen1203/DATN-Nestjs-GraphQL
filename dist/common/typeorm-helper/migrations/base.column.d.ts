import { TableColumn } from 'typeorm';
import { TableForeignKeyOptions } from 'typeorm/schema-builder/options/TableForeignKeyOptions';
export declare class BaseColumn {
    tableColumn: TableColumn;
    isIndex: boolean;
    foreignKeys: TableForeignKeyOptions[];
    constructor(tableColumn: TableColumn);
    length(length: number): this;
    nullable(): this;
    index(): this;
    default(value: any): this;
    foreign(table: string, column?: string, onDelete?: string, onUpdate?: string): void;
    unique(value?: boolean): this;
}
