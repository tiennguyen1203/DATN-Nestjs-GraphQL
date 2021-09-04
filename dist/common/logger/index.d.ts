import { Logger as TypeOrmLogger } from 'typeorm';
export declare class TypeormLoggerContainer implements TypeOrmLogger {
    logQuery(query: string): void;
    log(level: 'log' | 'info' | 'warn', message: string): void;
    logMigration(message: string): void;
    logQueryError(error: string | Error, query: string): void;
    logQuerySlow(time: number, query: string): void;
    logSchemaBuild(message: string): void;
}
