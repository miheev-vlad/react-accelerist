import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import {
  AuthenticationLayout,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  SearchPage,
  SetNewPasswordPage,
} from '../../../components';
import { RootState } from '../../../redux';

const MainRoutes: React.FC = () => {
  const isAuthorized = useSelector(
    (state: RootState) => state.user.isAuthorized,
  );

  return (
    <Routes>
      {isAuthorized && (
        <Route
          path="/"
          element={isAuthorized ? <SearchPage /> : <Navigate to="/auth" />}
        />
      )}
      {!isAuthorized && (
        <Route path="/auth" element={<AuthenticationLayout />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="reset" element={<ResetPasswordPage />} />
          <Route path="password" element={<SetNewPasswordPage />} />
          <Route path="/auth" element={<Navigate to="register" />} />
        </Route>
      )}
      <Route path="/change_password" element={<AuthenticationLayout />}>
        <Route index element={<SetNewPasswordPage />} />
      </Route>
      <Route
        path="*"
        element={
          isAuthorized ? <Navigate to="/" /> : <Navigate to="/auth/register" />
        }
      />
    </Routes>
  );
};

export default MainRoutes;
