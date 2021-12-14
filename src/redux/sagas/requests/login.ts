import _ from 'lodash';
import { apiAuthInstance } from '../../../api';

type LoginDataProps = {
  email: string;
  password: string;
};

export function requestLoginUser(loginData: LoginDataProps) {
  const apiAuth = apiAuthInstance();

  return apiAuth.post('/sign_in', loginData, {
    validateStatus: function (status) {
      return _.inRange(status, 400, 500) || _.inRange(status, 200, 300);
    },
  });
}
