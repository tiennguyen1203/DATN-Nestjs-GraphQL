import { Place } from 'src/db/main-db/entities/place.entity';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesService extends TypeOrmQueryService<Place> {}
