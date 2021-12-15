export {
  login,
  register,
  setAuth,
  authFail,
  clearAuthError,
  clearToken,
  sendEmail,
  clearLoading,
  setNewPassword,
  setResetPasswordSuccess,
  setResetPasswordFail,
  setSendEmailSuccess,
  clearSendEmail,
} from './authentication';
export {
  setUser,
  signOut,
  setSignInInformation,
  clearSignInInformation,
} from './user';
export { toggleShowAdvancedSearch } from './search';

export { default as authenticationReducer } from './authentication';
export { default as userReducer } from './user';
export { default as searchReducer } from './search';

export type {
  RequestAuthenticationPayloadProps,
  RequestSendEmailPayloadProps,
  RequestSetNewPasswordPayloadProps,
} from './authentication';

export { nameSelector } from './user';
