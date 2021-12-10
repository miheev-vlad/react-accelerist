import axios from 'axios';

export type AuthParamsType = {
  token: string;
};

export const apiAuthInstance = () => {
  const config = {
    baseURL: 'https://accelerist.herokuapp.com/api/v1/auth',
  };

  return axios.create(config);
};

export const apiResetPasswordInstance = ({ token }: AuthParamsType) => {
  const config = {
    baseURL: 'https://accelerist.herokuapp.com/api/v1/auth',
    headers: { Authorization: '' },
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return axios.create(config);
};
