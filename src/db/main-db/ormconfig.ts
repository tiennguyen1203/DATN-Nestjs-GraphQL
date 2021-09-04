import { config } from 'src/common/config';
import { ConnectionOptions } from 'typeorm';

const { host, username, password, dbname, port } = config.mainDatabaseDev;
const typeOrmConfig: ConnectionOptions = {
  type: 'postgres',
  port: +port,
  host,
  username,
  password,
  database: dbname,
  entities: [__dirname + '/entities/*{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/db/main-db/entities',
    migrationsDir: 'src/db/main-db/migrations',
  },
  uuidExtension: 'uuid-ossp',
  logging: 'all',
  logger: 'advanced-console',
};

export default typeOrmConfig;
