import 'dotenv/config';
export declare const config: {
    api: {
        nodeEnv: string;
        serviceName: string;
        region: string;
        clientWebsite: string;
        adminWebsite: string;
    };
    mainDatabaseDev: {
        port: number;
        host: string;
        username: string;
        password: string;
        dbname: string;
    };
    smtpService: {
        host: string;
        port: number;
        user: string;
        password: string;
    };
    sentry: {
        sentryKey: string;
    };
    aws: {
        s3BucketName: string;
    };
    stripe: {
        stripeSecretKey: string;
    };
};
