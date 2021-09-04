"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContext = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../../db/main-db/entities/user.entity");
exports.UserContext = common_1.createParamDecorator((data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context).getContext();
    const request = ctx.req;
    const user = request.user;
    return data ? user === null || user === void 0 ? void 0 : user[data] : user;
});
//# sourceMappingURL=user-context-decorator.js.map