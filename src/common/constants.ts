/* eslint-disable no-unused-vars */
import 'dotenv/config';

export const USER_POOL_ID = process.env.USER_POOL_ID;

export const APP_CLIENT_ID = process.env.APP_CLIENT_ID;

export const APP_ENV = process.env.APP_ENV;

export const AWS_COGNITO_AUTHORITY = process.env.AWS_COGNITO_AUTHORITY;

export const USER_POOL_WEB_CLIENT_ID = process.env.USER_POOL_WEB_CLIENT_ID;

export enum ROLE {
  Member = 'Member',
  Admin = 'Admin',
  Superadmin = 'Superadmin',
}

export enum APP_ENVIRONMENTS {
  dev = 'dev',
}
