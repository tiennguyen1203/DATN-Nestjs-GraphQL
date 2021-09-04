"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacesModule = void 0;
const query_graphql_1 = require("@nestjs-query/query-graphql");
const query_typeorm_1 = require("@nestjs-query/query-typeorm");
const common_1 = require("@nestjs/common");
const place_entity_1 = require("../../../db/main-db/entities/place.entity");
const places_dto_1 = require("../../shared/dto/places.dto");
const places_resolver_1 = require("./places.resolver");
let PlacesModule = class PlacesModule {
};
PlacesModule = __decorate([
    common_1.Module({
        providers: [places_resolver_1.PlacesResolver],
        imports: [
            query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([place_entity_1.Place])],
                dtos: [{ DTOClass: places_dto_1.PlaceDto }],
            }),
        ],
    })
], PlacesModule);
exports.PlacesModule = PlacesModule;
//# sourceMappingURL=places.module.js.map