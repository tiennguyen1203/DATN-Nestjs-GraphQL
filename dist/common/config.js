"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
const constants_1 = require("./constants");
exports.config = {
    api: {
        nodeEnv: process.env.APP_ENV || constants_1.APP_ENVIRONMENTS.dev,
        serviceName: process.env.SERVICE_NAME,
        region: process.env.REGION || 'ap-southeast-1',
        clientWebsite: process.env.CLIENT_WEBSITE || '',
        adminWebsite: process.env.ADMIN_WEBSITE || '',
    },
    mainDatabaseDev: {
        port: +process.env.DB_PORT,
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        dbname: process.env.DB_NAME,
    },
    smtpService: {
        host: process.env.SMTP_HOST,
        port: +process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        password: process.env.SMTP_PASS,
    },
    sentry: {
        sentryKey: process.env.SENTRY_DSN || '',
    },
    aws: {
        s3BucketName: process.env.S3_BUCKET,
    },
    stripe: {
        stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
    },
};
//# sourceMappingURL=config.js.map