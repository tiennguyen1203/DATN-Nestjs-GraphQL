"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./api/shared/auth/auth.module");
const superadmin_module_1 = require("./api/superadmin/superadmin.module");
const app_resolver_1 = require("./app.resolver");
const constants_1 = require("./common/constants");
const ormconfig_1 = require("./db/main-db/ormconfig");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(Object.assign(Object.assign({}, ormconfig_1.default), { keepConnectionAlive: true, logging: constants_1.APP_ENV === constants_1.APP_ENVIRONMENTS.dev ? 'all' : undefined })),
            superadmin_module_1.SuperadminModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [app_resolver_1.AppResolver],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map