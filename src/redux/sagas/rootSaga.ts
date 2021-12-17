import { takeLatest } from 'redux-saga/effects';
import {
  disLikeCompany,
  exportExcel,
  getCompanies,
  likeCompany,
  login,
  register,
  sendEmail,
  setNewPassword,
} from '../ducks';
import {
  handleChangePassword,
  handleDisLikeCompany,
  handleExportExcel,
  handleGetCompanies,
  handleLikeCompany,
  handleLoginUser,
  handleRegisterUser,
  handleSetNewPassword,
} from './handlers';

function* watchSaga() {
  yield takeLatest(login.type, handleLoginUser);
  yield takeLatest(register.type, handleRegisterUser);
  yield takeLatest(sendEmail.type, handleChangePassword);
  yield takeLatest(setNewPassword.type, handleSetNewPassword);
  yield takeLatest(getCompanies.type, handleGetCompanies);
  yield takeLatest(likeCompany.type, handleLikeCompany);
  yield takeLatest(disLikeCompany.type, handleDisLikeCompany);
  yield takeLatest(exportExcel.type, handleExportExcel);
}

export default watchSaga;
