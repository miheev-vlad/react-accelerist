import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import {
  RequestGetCompaniesPayloadProps,
  RequestLikeCompanyPayloadProps,
  setCompanies,
  cleaningLoading,
  showUploadFileToast,
} from '../../ducks';
import { setError } from '../../ducks/companies';
import {
  requestDisLikeCompany,
  requestExportExcel,
  requestGetCompanies,
  requestLikeCompany,
} from '../requests';

export function* handleGetCompanies(
  action: PayloadAction<RequestGetCompaniesPayloadProps>,
): any {
  const { token, page, queryParams } = action.payload;

  try {
    const response = yield call(requestGetCompanies, {
      token,
      page,
      queryParams,
    });
    const { data } = response;
    yield put(setCompanies({ ...data }));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* handleLikeCompany(
  action: PayloadAction<RequestLikeCompanyPayloadProps>,
): any {
  const { token, id } = action.payload;

  try {
    yield call(requestLikeCompany, { token, id });
    yield put(cleaningLoading());
  } catch (error) {
    yield put(setError(error));
  }
}

export function* handleDisLikeCompany(
  action: PayloadAction<RequestLikeCompanyPayloadProps>,
): any {
  const { token, id } = action.payload;

  try {
    yield call(requestDisLikeCompany, { token, id });
    yield put(cleaningLoading());
  } catch (error) {
    yield put(setError(error));
  }
}

export function* handleExportExcel(
  action: PayloadAction<RequestGetCompaniesPayloadProps>,
): any {
  const { token, page } = action.payload;

  try {
    const response = yield call(requestExportExcel, { token, page });
    const { data } = response;
    yield put(showUploadFileToast({ ...data }));
  } catch (error) {
    yield put(setError(error));
  }
}
