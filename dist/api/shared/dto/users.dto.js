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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const query_graphql_1 = require("@nestjs-query/query-graphql");
const graphql_1 = require("@nestjs/graphql");
const constants_1 = require("../../../common/constants");
const places_dto_1 = require("./places.dto");
graphql_1.registerEnumType(constants_1.ROLE, {
    name: 'ROLE',
});
let UserDto = class UserDto {
};
__decorate([
    query_graphql_1.IDField(() => graphql_1.ID),
    __metadata("design:type", String)
], UserDto.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], UserDto.prototype, "fullName", void 0);
__decorate([
    query_graphql_1.FilterableField({ nullable: true }),
    __metadata("design:type", String)
], UserDto.prototype, "role", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserDto.prototype, "phoneNumber", void 0);
__decorate([
    query_graphql_1.FilterableField({ nullable: true }),
    __metadata("design:type", Boolean)
], UserDto.prototype, "isActive", void 0);
__decorate([
    query_graphql_1.FilterableField(() => graphql_1.GraphQLISODateTime, { nullable: true }),
    __metadata("design:type", Date)
], UserDto.prototype, "createdAt", void 0);
__decorate([
    query_graphql_1.FilterableField(() => graphql_1.GraphQLISODateTime, { nullable: true }),
    __metadata("design:type", Date)
], UserDto.prototype, "updatedAt", void 0);
UserDto = __decorate([
    graphql_1.ObjectType('User', { isAbstract: true }),
    query_graphql_1.Relation('places', () => places_dto_1.PlaceDto),
    query_graphql_1.QueryOptions({ pagingStrategy: query_graphql_1.PagingStrategies.OFFSET })
], UserDto);
exports.UserDto = UserDto;
//# sourceMappingURL=users.dto.js.map