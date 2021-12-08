import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { Header } from './components/Header';

const AuthenticationLayout: React.FC = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  );
};

export default AuthenticationLayout;

export const LayoutWrapper = styled.div`
  min-height: 1024px;
  background: url('/assets/images/png/homedark.png') no-repeat center;
  background-size: cover;

  @media screen and (max-width: 500px) {
    min-height: 760px;
  }
`;
