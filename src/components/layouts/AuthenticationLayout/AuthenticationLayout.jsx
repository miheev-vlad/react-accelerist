import React from 'react';
import { Outlet } from 'react-router';
import { Header } from './components/Header';

const AuthenticationLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AuthenticationLayout;
