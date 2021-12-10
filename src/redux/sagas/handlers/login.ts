import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import _ from 'lodash';
import {
  authFail,
  RequestAuthenticationPayloadProps,
  setAuth,
  setUser,
} from '../../ducks';
import { requestLoginUser } from '../requests';

export function* handleLoginUser(
  action: PayloadAction<RequestAuthenticationPayloadProps>,
): any {
  const { email, password } = action.payload;

  try {
    const response = yield call(requestLoginUser, { email, password });
    const { status } = response;
    if (_.inRange(status, 400, 500)) {
      const { data } = response;
      yield put(authFail({ errorMessage: data.message }));
    } else {
      const { data } = response;
      yield put(setAuth({ ...data }));
      yield put(setUser({ ...data }));
    }
  } catch (error) {
    if (error instanceof Error) {
      yield put(authFail({ errorMessage: error.message }));
    } else {
      yield put(
        authFail({
          errorMessage: 'Some error has happened',
        }),
      );
    }
  }
}
