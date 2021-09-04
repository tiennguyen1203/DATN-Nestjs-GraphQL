"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacesResolver = void 0;
const core_1 = require("@nestjs-query/core");
const query_graphql_1 = require("@nestjs-query/query-graphql");
const graphql_1 = require("@nestjs/graphql");
const places_dto_1 = require("../../shared/dto/places.dto");
const constants_1 = require("../../../common/constants");
const auth_decorator_1 = require("../../../common/decorators/auth.decorator");
const entities_1 = require("../../../db/main-db/entities");
const places_service_1 = require("./places.service");
let PlacesResolver = class PlacesResolver extends query_graphql_1.CRUDResolver(places_dto_1.PlaceDto) {
    constructor(service) {
        super(service);
        this.service = service;
    }
};
PlacesResolver = __decorate([
    graphql_1.Resolver(() => entities_1.Place),
    auth_decorator_1.Authorize([constants_1.ROLE.Superadmin]),
    __param(0, core_1.InjectQueryService(entities_1.Place)),
    __metadata("design:paramtypes", [places_service_1.PlacesService])
], PlacesResolver);
exports.PlacesResolver = PlacesResolver;
//# sourceMappingURL=places.resolver.js.map