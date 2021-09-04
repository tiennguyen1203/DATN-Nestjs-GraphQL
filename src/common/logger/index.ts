import { Logger as TypeOrmLogger } from 'typeorm';

export class TypeormLoggerContainer implements TypeOrmLogger {
  logQuery(query: string): void {
    console.info(query);
  }

  log(level: 'log' | 'info' | 'warn', message: string): void {
    console.log(message);
  }

  logMigration(message: string): void {
    console.log(message);
  }

  logQueryError(error: string | Error, query: string): void {
    console.log(query);
  }

  logQuerySlow(time: number, query: string): void {
    console.log(query);
  }

  logSchemaBuild(message: string): void {
    console.log(message);
  }
}
