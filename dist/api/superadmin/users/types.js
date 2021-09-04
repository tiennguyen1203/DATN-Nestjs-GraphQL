"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserConnection = exports.UserQuery = void 0;
const query_graphql_1 = require("@nestjs-query/query-graphql");
const graphql_1 = require("@nestjs/graphql");
const users_dto_1 = require("../../shared/dto/users.dto");
let UserQuery = class UserQuery extends query_graphql_1.QueryArgsType(users_dto_1.UserDto) {
};
UserQuery = __decorate([
    graphql_1.ArgsType()
], UserQuery);
exports.UserQuery = UserQuery;
exports.UserConnection = UserQuery.ConnectionType;
//# sourceMappingURL=types.js.map