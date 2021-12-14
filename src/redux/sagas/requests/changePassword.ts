import { apiAuthInstance, apiResetPasswordInstance } from '../../../api';

type SendEmailProps = {
  email: string;
};

type SetNewPasswordProps = {
  password: string;
  passwordConfirmation: string;
  passwordResetToken: string;
};

export function requestSendEmail(senEmailData: SendEmailProps) {
  const apiAuth = apiAuthInstance();

  return apiAuth.post('/change_password/send_mail', senEmailData);
}

export function requestSetNewPassword(setNewPasswordData: SetNewPasswordProps) {
  const { password, passwordConfirmation, passwordResetToken } =
    setNewPasswordData;
  const apiAuth = apiResetPasswordInstance({ token: passwordResetToken });

  return apiAuth.post('/change_password/change', {
    password,
    passwordConfirmation,
  });
}
