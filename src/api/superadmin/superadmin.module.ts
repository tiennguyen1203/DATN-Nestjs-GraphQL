import { PlacesModule } from './places/places.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      include: [UsersModule, PlacesModule],
      installSubscriptionHandlers: true,
      autoSchemaFile: 'superadmin-schema.gql',
      path: '/superadmin',
      debug: true,
    }),
    UsersModule,
    PlacesModule,
  ],
  controllers: [],
  providers: [],
})
export class SuperadminModule {}
