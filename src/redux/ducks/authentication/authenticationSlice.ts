import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthStateProps = {
  token: string;
  isLoading: boolean;
  errorMessage: string;
  isResetPasswordSuccess: boolean;
  isEmailSendSuccess: boolean;
};

export type RequestAuthenticationPayloadProps = {
  email: string;
  password: string;
};

export type RequestSendEmailPayloadProps = {
  email: string;
};

export type RequestSetNewPasswordPayloadProps = {
  password: string;
  passwordConfirmation: string;
  passwordResetToken: string;
};

export type ResponseAuthPayloadProps = {
  accessToken: string;
};

export type ResponseErrorPayloadProps = {
  errorMessage: string;
};

const initialState: AuthStateProps = {
  token: '',
  isLoading: false,
  errorMessage: '',
  isResetPasswordSuccess: false,
  isEmailSendSuccess: false,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<RequestAuthenticationPayloadProps>,
    ) => {
      state.isLoading = true;
      action;
    },
    register: (
      state,
      action: PayloadAction<RequestAuthenticationPayloadProps>,
    ) => {
      state.isLoading = true;
      action;
    },
    setAuth: (state, action: PayloadAction<ResponseAuthPayloadProps>) => {
      state.isLoading = false;
      state.token = action.payload.accessToken;
    },
    authFail: (state, action: PayloadAction<ResponseErrorPayloadProps>) => {
      state.isLoading = false;
      state.errorMessage = action.payload.errorMessage;
    },
    clearAuthError: state => {
      state.errorMessage = '';
    },
    clearToken: state => {
      state.token = '';
    },
    sendEmail: (state, action: PayloadAction<RequestSendEmailPayloadProps>) => {
      state.isLoading = true;
      action.payload;
    },
    clearLoading: state => {
      state.isLoading = false;
    },
    setNewPassword: (
      state,
      action: PayloadAction<RequestSetNewPasswordPayloadProps>,
    ) => {
      state.isLoading = true;
      action.payload;
    },
    setResetPasswordSuccess: state => {
      state.isResetPasswordSuccess = true;
    },
    setResetPasswordFail: state => {
      state.isResetPasswordSuccess = false;
    },
    setSendEmailSuccess: state => {
      state.isEmailSendSuccess = true;
    },
    clearSendEmail: state => {
      state.isEmailSendSuccess = false;
    },
  },
});

export const {
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
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
