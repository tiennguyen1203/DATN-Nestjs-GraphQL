"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_ENVIRONMENTS = exports.ROLE = exports.USER_POOL_WEB_CLIENT_ID = exports.AWS_COGNITO_AUTHORITY = exports.APP_ENV = exports.APP_CLIENT_ID = exports.USER_POOL_ID = void 0;
require("dotenv/config");
exports.USER_POOL_ID = process.env.USER_POOL_ID;
exports.APP_CLIENT_ID = process.env.APP_CLIENT_ID;
exports.APP_ENV = process.env.APP_ENV;
exports.AWS_COGNITO_AUTHORITY = process.env.AWS_COGNITO_AUTHORITY;
exports.USER_POOL_WEB_CLIENT_ID = process.env.USER_POOL_WEB_CLIENT_ID;
var ROLE;
(function (ROLE) {
    ROLE["Member"] = "Member";
    ROLE["Admin"] = "Admin";
    ROLE["Superadmin"] = "Superadmin";
})(ROLE = exports.ROLE || (exports.ROLE = {}));
var APP_ENVIRONMENTS;
(function (APP_ENVIRONMENTS) {
    APP_ENVIRONMENTS["dev"] = "dev";
})(APP_ENVIRONMENTS = exports.APP_ENVIRONMENTS || (exports.APP_ENVIRONMENTS = {}));
//# sourceMappingURL=constants.js.map