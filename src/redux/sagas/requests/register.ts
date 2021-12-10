import { AxiosResponse } from 'axios';
import _ from 'lodash';
import { apiAuthInstance } from '../../../api';

type RegisterDataProps = {
  email: string;
  password: string;
};

export function requestRegisterUser(registerData: RegisterDataProps) {
  const apiAuth = apiAuthInstance();

  return apiAuth.post<any, AxiosResponse<any, any>, RegisterDataProps>(
    '/sign_up',
    registerData,
    {
      validateStatus: function (status) {
        return _.inRange(status, 400, 500) || _.inRange(status, 200, 300);
      },
    },
  );
}
