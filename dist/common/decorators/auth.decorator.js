"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorize = void 0;
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("../guards/gql-auth.guard");
const roles_guard_1 = require("../guards/roles.guard");
function Authorize(roles) {
    return common_1.applyDecorators(common_1.SetMetadata('roles', roles), common_1.UseGuards(gql_auth_guard_1.GqlAuthGuard, roles_guard_1.RolesGuard));
}
exports.Authorize = Authorize;
//# sourceMappingURL=auth.decorator.js.map