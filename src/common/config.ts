import 'dotenv/config';
import { APP_ENVIRONMENTS } from './constants';

export const config = {
  api: {
    nodeEnv: process.env.APP_ENV || APP_ENVIRONMENTS.dev,
    serviceName: process.env.SERVICE_NAME,
    region: process.env.REGION || 'ap-southeast-1',
    clientWebsite: process.env.CLIENT_WEBSITE || '',
    adminWebsite: process.env.ADMIN_WEBSITE || '',
  },
  mainDatabaseDev: {
    port: +process.env.DB_PORT || 5432,
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'hoang123',
    dbname: process.env.DB_NAME || 'datn-main-db',
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
