import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { Header } from './components/Header';

const AuthenticationLayout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  );
};

export default AuthenticationLayout;

export const LayoutWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: url('/assets/images/png/homedark.png') no-repeat center;
  background-size: cover;
`;
