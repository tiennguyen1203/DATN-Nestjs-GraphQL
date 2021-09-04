import { Place } from 'src/db/main-db/entities/place.entity';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
export declare class PlacesService extends TypeOrmQueryService<Place> {
}
