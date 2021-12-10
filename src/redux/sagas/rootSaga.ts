import { takeLatest } from 'redux-saga/effects';
import { login, register, sendEmail, setNewPassword } from '../ducks';
import {
  handleChangePassword,
  handleLoginUser,
  handleRegisterUser,
  handleSetNewPassword,
} from './handlers';

function* watchSaga() {
  yield takeLatest(login.type, handleLoginUser);
  yield takeLatest(register.type, handleRegisterUser);
  yield takeLatest(sendEmail.type, handleChangePassword);
  yield takeLatest(setNewPassword.type, handleSetNewPassword);
}

export default watchSaga;
