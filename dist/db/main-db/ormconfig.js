"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../common/config");
const { host, username, password, dbname, port } = config_1.config.mainDatabaseDev;
const typeOrmConfig = {
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
};
console.log('typeOrmConfig: ', typeOrmConfig);
exports.default = typeOrmConfig;
//# sourceMappingURL=ormconfig.js.map