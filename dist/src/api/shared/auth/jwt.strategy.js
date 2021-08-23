"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const jwks_rsa_1 = require("jwks-rsa");
const passport_jwt_1 = require("passport-jwt");
const constants_1 = require("../../../common/constants");
class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor() {
        super({
            secretOrKeyProvider: jwks_rsa_1.passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `${constants_1.AWS_COGNITO_AUTHORITY}/.well-known/jwks.json`,
            }),
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            audience: constants_1.USER_POOL_WEB_CLIENT_ID,
            issuer: constants_1.AWS_COGNITO_AUTHORITY,
            algorithms: ['RS256'],
        });
    }
    validate(payload) {
        return payload;
    }
}
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map