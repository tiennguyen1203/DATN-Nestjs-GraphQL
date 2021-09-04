import { CRUDResolver } from '@nestjs-query/query-graphql';
import { PlaceDto } from 'src/api/shared/dto/places.dto';
import { PlacesService } from './places.service';
declare const PlacesResolver_base: import("@nestjs-query/query-graphql/dist/src/resolvers/resolver.interface").ResolverClass<PlaceDto, import("@nestjs-query/core").QueryService<PlaceDto, import("@nestjs-query/core").DeepPartial<PlaceDto>, import("@nestjs-query/core").DeepPartial<PlaceDto>>, CRUDResolver<PlaceDto, import("@nestjs-query/core").DeepPartial<PlaceDto>, import("@nestjs-query/core").DeepPartial<PlaceDto>, import("@nestjs-query/query-graphql").ReadResolverOpts<PlaceDto>, import("@nestjs-query/core").QueryService<PlaceDto, import("@nestjs-query/core").DeepPartial<PlaceDto>, import("@nestjs-query/core").DeepPartial<PlaceDto>>>>;
export declare class PlacesResolver extends PlacesResolver_base {
    readonly service: PlacesService;
    constructor(service: PlacesService);
}
export {};
