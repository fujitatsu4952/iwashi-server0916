import { CustomMessageForgotPasswordTriggerEvent, CustomMessageSignUpTriggerEvent } from 'aws-lambda';

class HostCognitoCustomMessageService {
    public signUp(event: CustomMessageSignUpTriggerEvent): CustomMessageSignUpTriggerEvent {
        const useremail: string = event.request.userAttributes.email;
        const codeParameter: string = event.request.codeParameter || '{####}';

        event.response.emailSubject = `CHILLNNへの新規ご登録ありがとうございます。`;
        event.response.emailMessage = `
        <p>※このメールは、登録メールアドレス宛に自動的にお送りしています。</p>
        <p>----------------------------------------------------------------</p>
        <p>CHILLNNへの新規ご登録ありがとうございます。</p>
        <p>下記のURLをクリックして、新規アカウントの登録を続けてください。</p>
        <p>http://localhost:3000/auth/verify?verify_code=${codeParameter}&username=${encodeURIComponent(useremail)}</p>
        <p>※本メールは通知用のメールアドレスです。ご返信いただくことはできません。</p>
        <p>----------------------------------------------------------------</p>
        <p>株式会社CHILLNN</p>`;
        return event;
    }

    public passwordReset(event: CustomMessageForgotPasswordTriggerEvent): CustomMessageForgotPasswordTriggerEvent {
        const useremail: string = event.request.userAttributes.email;
        const codeParameter: string = event.request.codeParameter || '{####}';
        event.response.emailSubject = `【CHILLNN】パスワードリセットの確認`;
        event.response.emailMessage = `
        <p>※このメールは、登録メールアドレス宛に自動的にお送りしています。</p>
        <p>----------------------------------------------------------------</p>
        <p>こんにちは。</p>
        <p>CHILLNNをご利用いただき、まことにありがとうございます。</p>
        <p>パスワードを忘れた場合、下記URLからパスワードの再設定をお願いいたします。</p>
        <p>http://localhost:3000?verify_code=${codeParameter}&username=${encodeURIComponent(useremail)}</p>
        <p>※本メールは通知用のメールアドレスです。ご返信いただくことはできません。</p>
        <p>----------------------------------------------------------------</p>
        <p>株式会社CHILLNN</p>`;
        return event;
    }
}

export const hostCognitoCustomMessageService = new HostCognitoCustomMessageService();
