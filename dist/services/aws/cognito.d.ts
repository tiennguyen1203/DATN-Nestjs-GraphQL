import * as AWS from 'aws-sdk';
export declare class CognitoService {
    private cognitoIdentityServiceProvider;
    constructor();
    disableUser(userName: string): Promise<import("aws-sdk/lib/request").PromiseResult<AWS.CognitoIdentityServiceProvider.AdminDisableUserResponse, AWS.AWSError>>;
    enableUser(userName: string): Promise<import("aws-sdk/lib/request").PromiseResult<AWS.CognitoIdentityServiceProvider.AdminEnableUserResponse, AWS.AWSError>>;
    signUp(user: any, password: string): Promise<AWS.Request<AWS.CognitoIdentityServiceProvider.SignUpResponse, AWS.AWSError>>;
}
