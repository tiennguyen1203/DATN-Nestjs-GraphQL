import { config } from 'src/common/config';
import { APP_ENVIRONMENTS } from 'src/common/constants';
import { ConnectionOptions } from 'typeorm';

export const ormconfig = (hardCodeEnv?: string) => {
  const nodeEnv = hardCodeEnv || config.api.nodeEnv;

  let typeOrmConfig: ConnectionOptions = {
    type: 'postgres',
    cli: {
      migrationsDir: 'migrations',
      entitiesDir: 'entities',
    },
  };
  if (nodeEnv === APP_ENVIRONMENTS.dev) {
    const { host, username, password, dbname, port } = config.mainDatabaseDev;
    typeOrmConfig = {
      ...typeOrmConfig,
      port: +port,
      host,
      username,
      password,
      database: dbname,
    };
  }
  // if ([APP_ENV.STAGING, APP_ENV.UAT, APP_ENV.PROD].includes(nodeEnv)) {
  //   /* Get uri connect to db cloud - staging & uat & release environment */
  //   typeOrmConfig = {
  //     ...typeOrmConfig,
  //     port: parseInt(process.env.DB_PORT || '5432'),
  //     host: process.env.DB_HOST as string,
  //     username: process.env.DB_USERNAME as string,
  //     password: process.env.DB_PASSWORD as string,
  //     database: process.env.DB_NAME as string,
  //   };
  // }
  return typeOrmConfig;
};
