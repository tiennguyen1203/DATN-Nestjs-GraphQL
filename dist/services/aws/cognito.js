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
exports.CognitoService = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const constants_1 = require("../../common/constants");
let CognitoService = class CognitoService {
    constructor() {
        this.cognitoIdentityServiceProvider =
            new AWS.CognitoIdentityServiceProvider();
    }
    async disableUser(userName) {
        return this.cognitoIdentityServiceProvider
            .adminDisableUser({
            UserPoolId: constants_1.USER_POOL_ID,
            Username: userName,
        })
            .promise();
    }
    async enableUser(userName) {
        return this.cognitoIdentityServiceProvider
            .adminEnableUser({
            UserPoolId: constants_1.USER_POOL_ID,
            Username: userName,
        })
            .promise();
    }
    async signUp(user, password) {
        return this.cognitoIdentityServiceProvider.signUp({
            ClientId: constants_1.APP_CLIENT_ID,
            Password: password,
            Username: user.username,
        });
    }
};
CognitoService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], CognitoService);
exports.CognitoService = CognitoService;
//# sourceMappingURL=cognito.js.map