import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';
import { TableColumn } from 'typeorm';
import { BaseColumn } from './base.column';
export declare class BaseTable {
    private columns;
    private changeIndexColumns;
    columnToDeletes: string[];
    getNewColumns(): TableColumn[];
    dropColumn(column: any): void;
    getIndexColumns(): TableColumn[];
    getForeignKeys(): any[];
    private getColumnValue;
    string(name: string, length?: number, options?: Partial<TableColumnOptions>): BaseColumn;
    strings(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    uuid(name?: string, options?: Partial<TableColumnOptions>): BaseColumn;
    primaryUuid(name?: string, options?: Partial<TableColumnOptions>): BaseColumn;
    integer(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    integers(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    double(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    timestamp(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    decimal(name: string, precision?: number, scale?: number, options?: Partial<TableColumnOptions>): BaseColumn;
    boolean(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    jsonb(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    json(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    baseTime(): void;
    createdAt(): BaseColumn;
    updatedAt(): BaseColumn;
    deletedAt(): BaseColumn;
    addIndexAlreadyColumn(column: string): void;
}
