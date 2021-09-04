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
exports.UsersResolver = void 0;
const core_1 = require("@nestjs-query/core");
const query_graphql_1 = require("@nestjs-query/query-graphql");
const graphql_1 = require("@nestjs/graphql");
const users_dto_1 = require("../../shared/dto/users.dto");
const constants_1 = require("../../../common/constants");
const auth_decorator_1 = require("../../../common/decorators/auth.decorator");
const user_context_decorator_1 = require("../../../common/decorators/user-context-decorator");
const entities_1 = require("../../../db/main-db/entities");
const types_1 = require("./types");
const users_service_1 = require("./users.service");
let UsersResolver = class UsersResolver extends query_graphql_1.CRUDResolver(users_dto_1.UserDto, {
    read: { many: { disabled: true } },
}) {
    constructor(userService) {
        super(userService);
        this.userService = userService;
    }
    getMany(query, email) {
        return super.queryMany(Object.assign(Object.assign({}, query), { filter: {
                email: {
                    neq: email,
                },
            } }));
    }
};
__decorate([
    graphql_1.Query(() => types_1.UserConnection, { name: 'users' }),
    __param(0, query_graphql_1.HookArgs()),
    __param(1, user_context_decorator_1.UserContext('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.UserQuery, String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getMany", null);
UsersResolver = __decorate([
    graphql_1.Resolver(() => entities_1.User),
    auth_decorator_1.Authorize([constants_1.ROLE.Superadmin]),
    __param(0, core_1.InjectQueryService(entities_1.User)),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map