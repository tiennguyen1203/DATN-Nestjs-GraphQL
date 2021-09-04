"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperadminModule = void 0;
const places_module_1 = require("./places/places.module");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const users_module_1 = require("./users/users.module");
let SuperadminModule = class SuperadminModule {
};
SuperadminModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                include: [users_module_1.UsersModule, places_module_1.PlacesModule],
                installSubscriptionHandlers: true,
                autoSchemaFile: 'superadmin-schema.gql',
                path: '/superadmin',
                debug: true,
            }),
            users_module_1.UsersModule,
            places_module_1.PlacesModule,
        ],
        controllers: [],
        providers: [],
    })
], SuperadminModule);
exports.SuperadminModule = SuperadminModule;
//# sourceMappingURL=superadmin.module.js.map