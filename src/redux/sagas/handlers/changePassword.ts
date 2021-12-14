import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, StrictEffect } from 'redux-saga/effects';
import {
  authFail,
  clearLoading,
  clearSendEmail,
  RequestSendEmailPayloadProps,
  RequestSetNewPasswordPayloadProps,
  setResetPasswordSuccess,
  setSendEmailSuccess,
} from '../../ducks';
import { requestSendEmail, requestSetNewPassword } from '../requests';

export function* handleChangePassword(
  action: PayloadAction<RequestSendEmailPayloadProps>,
): Generator<StrictEffect, void> {
  const { email } = action.payload;

  try {
    yield call(requestSendEmail, { email });
    yield put(clearLoading());
    yield put(setSendEmailSuccess());
  } catch (error) {
    yield put(clearSendEmail());
    yield put(
      authFail({
        errorMessage: 'Some error has happened',
      }),
    );
  }
}

export function* handleSetNewPassword(
  action: PayloadAction<RequestSetNewPasswordPayloadProps>,
): Generator<StrictEffect, void> {
  const { password, passwordConfirmation, passwordResetToken } = action.payload;

  try {
    yield call(requestSetNewPassword, {
      password,
      passwordConfirmation,
      passwordResetToken,
    });
    yield put(setResetPasswordSuccess());
    yield put(clearLoading());
  } catch (error) {
    yield put(
      authFail({
        errorMessage: 'Some error has happened',
      }),
    );
  }
}
