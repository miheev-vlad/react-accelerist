import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import {
  AuthenticationLayout,
  DashboardLayout,
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
          path="/dashboard"
          element={
            isAuthorized ? <DashboardLayout /> : <Navigate to="/auth" />
          }>
          <Route index element={<SearchPage />} />
        </Route>
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
          isAuthorized ? (
            <Navigate to="/dashboard" />
          ) : (
            <Navigate to="/auth/register" />
          )
        }
      />
    </Routes>
  );
};

export default MainRoutes;
