require('dotenv').config();

export const USER_POOL_ID = process.env.USER_POOL_ID;

export const APP_CLIENT_ID = process.env.APP_CLIENT_ID;

export const APP_ENV = process.env.APP_ENV;

export enum ROLE {
  Member = 'Member',
  Admin = 'Admin',
  Superadmin = 'Superadmin',
}

export enum APP_ENVIRONMENTS {
  dev = 'dev',
}
