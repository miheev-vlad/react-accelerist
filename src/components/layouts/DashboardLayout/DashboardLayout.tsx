import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { SearchFilterContext } from '../../../context';
import { Colors } from '../../../globalColors';
import { Navbar, SearchPanel } from './components';

const DashboardLayout: React.FC = () => {
  const [filterName, setFilterName] = useState('');

  return (
    <SearchFilterContext.Provider
      value={{
        filterName,
      }}>
      <LayoutWrapper>
        <Navbar />
        <SearchPanel setFilterName={setFilterName} />
        <Outlet />
      </LayoutWrapper>
    </SearchFilterContext.Provider>
  );
};

export default DashboardLayout;

export const LayoutWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${Colors.snow_drift};
`;
