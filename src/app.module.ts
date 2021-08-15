import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule as MemberUsersModule } from './api/member/users/users.module';
import { AuthModule } from './api/shared/auth/auth.module';
import { UsersModule as SuperadminUsersModule } from './api/superadmin/users/users.module';
import { AppResolver } from './app.resolver';
import { APP_ENV, APP_ENVIRONMENTS } from './common/constants';
import typeOrmConfig from './db/main-db/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeOrmConfig,
      keepConnectionAlive: true,
      logging: APP_ENV === APP_ENVIRONMENTS.dev,
    }),
    GraphQLModule.forRoot({
      include: [SuperadminUsersModule],
      installSubscriptionHandlers: true,
      autoSchemaFile: 'superadmin-schema.gql',
      path: '/superadmin',
    }),
    // GraphQLModule.forRoot({
    //   installSubscriptionHandlers: true,
    //   autoSchemaFile: 'admin-schema.gql',
    //   path: '/admin',
    // }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'member-schema.gql',
      path: '/member',
      include: [MemberUsersModule],
    }),
    SuperadminUsersModule,
    MemberUsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
