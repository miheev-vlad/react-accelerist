import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { Colors } from '../../../globalColors';
import { Navbar, SearchPanel } from './components';

const DashboardLayout: React.FC = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <SearchPanel />
      <Outlet />
    </LayoutWrapper>
  );
};

export default DashboardLayout;

export const LayoutWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${Colors.snow_drift};
`;
