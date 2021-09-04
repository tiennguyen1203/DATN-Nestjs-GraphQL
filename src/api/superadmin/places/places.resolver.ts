import { InjectQueryService } from '@nestjs-query/core';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { Resolver } from '@nestjs/graphql';
import { PlaceDto } from 'src/api/shared/dto/places.dto';
import { ROLE } from 'src/common/constants';
import { Authorize } from 'src/common/decorators/auth.decorator';
import { Place } from 'src/db/main-db/entities';
import { PlacesService } from './places.service';

@Resolver(() => Place)
@Authorize([ROLE.Superadmin])
export class PlacesResolver extends CRUDResolver(PlaceDto) {
  constructor(
    @InjectQueryService(Place) readonly service: PlacesService, // readonly service: PlacesService,
  ) {
    super(service);
  }

  // @Query(() => placeConnection, { name: 'places' })
  // getMany(
  //   @HookArgs() query: PlaceQuery,
  //   @UserContext('id') userId: string,
  // ): Promise<
  //   | CursorConnectionType<PlaceDto>
  //   | OffsetConnectionType<PlaceDto>
  //   | ArrayConnectionType<PlaceDto>
  // > {
  //   return super.queryMany({
  //     ...query,
  //     // filter: {
  //     //   id: {
  //     //     neq: userId,
  //     //   },
  //     // },
  //   });
  // }
}
