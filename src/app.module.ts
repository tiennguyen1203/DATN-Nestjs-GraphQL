import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './api/shared/auth/auth.module';
import { SuperadminModule } from './api/superadmin/superadmin.module';
import { AppResolver } from './app.resolver';
import { APP_ENV, APP_ENVIRONMENTS } from './common/constants';
import typeOrmConfig from './db/main-db/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeOrmConfig,
      keepConnectionAlive: true,
      logging: APP_ENV === APP_ENVIRONMENTS.dev ? 'all' : undefined,
    }),
    // GraphQLModule.forRoot({
    //   installSubscriptionHandlers: true,
    //   autoSchemaFile: 'admin-schema.gql',
    //   path: '/admin',
    // }),
    // GraphQLModule.forRoot({
    //   installSubscriptionHandlers: true,
    //   autoSchemaFile: 'member-schema.gql',
    //   path: '/member',
    //   include: [MemberUsersModule],
    // }),
    SuperadminModule,
    AuthModule,
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
