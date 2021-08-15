import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './api/customer/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_ENV, APP_ENVIRONMENTS } from './common/constants';
import typeOrmConfig from './db/main-db/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeOrmConfig,
      keepConnectionAlive: true,
      logging: APP_ENV === APP_ENVIRONMENTS.dev,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
