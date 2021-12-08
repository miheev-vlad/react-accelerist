import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import {
  AuthenticationLayout,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  SearchPage,
  SetNewPasswordPage,
} from '../../../components';

const MainRoutes: React.FC = () => {
  const isAuth = false;

  return (
    <Routes>
      <Route
        path="/"
        element={isAuth ? <SearchPage /> : <Navigate to="/auth" />}
      />
      <Route path="/auth" element={<AuthenticationLayout />}>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="reset" element={<ResetPasswordPage />} />
        <Route path="password" element={<SetNewPasswordPage />} />
        <Route path="/auth" element={<Navigate to="register" />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default MainRoutes;
