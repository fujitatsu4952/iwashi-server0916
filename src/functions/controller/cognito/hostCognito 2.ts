import { CustomMessageTriggerHandler, CustomMessageTriggerEvent } from 'aws-lambda';
import { hostCognitoCustomMessageService } from '../../service/cognito/hostCognitoService';

export const controller: CustomMessageTriggerHandler = async (event: CustomMessageTriggerEvent) => {
    switch (event.triggerSource) {
        case 'CustomMessage_SignUp':
            // サインアップ
            return hostCognitoCustomMessageService.signUp(event);
        case 'CustomMessage_ForgotPassword':
            // パスワードリセット
            return hostCognitoCustomMessageService.passwordReset(event);
        default:
            return event;
    }
};
