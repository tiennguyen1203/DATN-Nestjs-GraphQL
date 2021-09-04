import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Place } from 'src/db/main-db/entities/place.entity';
import { PlaceDto } from '../../shared/dto/places.dto';
import { PlacesResolver } from './places.resolver';

@Module({
  providers: [PlacesResolver],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Place])],
      dtos: [{ DTOClass: PlaceDto }],
    }),
  ],
})
export class PlacesModule {}
