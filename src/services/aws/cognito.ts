import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { APP_CLIENT_ID, USER_POOL_ID } from 'src/common/constants';

@Injectable()
export class CognitoService {
  private cognitoIdentityServiceProvider: AWS.CognitoIdentityServiceProvider;
  constructor() {
    this.cognitoIdentityServiceProvider =
      new AWS.CognitoIdentityServiceProvider();
  }

  async disableUser(userName: string) {
    return this.cognitoIdentityServiceProvider
      .adminDisableUser({
        UserPoolId: USER_POOL_ID,
        Username: userName,
      })
      .promise();
  }

  async enableUser(userName: string) {
    return this.cognitoIdentityServiceProvider
      .adminEnableUser({
        UserPoolId: USER_POOL_ID,
        Username: userName,
      })
      .promise();
  }

  // async changePassword(AccessToken: string, payload: ChangePasswordDto) {
  //   return this.cognitoIdentityServiceProvider.changePassword({
  //     AccessToken,
  //     PreviousPassword: payload.oldPassWord,
  //     ProposedPassword: payload.newPassWord,
  //   });
  // }

  // async forgotPassword(userName: string) {
  //   return this.cognitoIdentityServiceProvider.forgotPassword({
  //     ClientId: APP_CLIENT_ID,
  //     Username: userName,
  //   });
  // }

  // async confirmForgotPassword(confirmForgotPassword: ConfirmForgotPasswordDto) {
  //   return this.cognitoIdentityServiceProvider.confirmForgotPassword({
  //     ClientId: APP_CLIENT_ID,
  //     ConfirmationCode: confirmForgotPassword.confirmationCode,
  //     Password: confirmForgotPassword.password,
  //     Username: confirmForgotPassword.email,
  //   });
  // }

  async signUp(user: any, password: string) {
    return this.cognitoIdentityServiceProvider.signUp({
      ClientId: APP_CLIENT_ID,
      Password: password,
      Username: user.username,
    });
  }
}
