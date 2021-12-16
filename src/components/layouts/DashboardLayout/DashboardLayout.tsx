import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { Colors } from '../../../globalColors';
import { RootState } from '../../../redux';
import { Navbar, SearchPanel } from './components';

const DashboardLayout: React.FC = () => {
  const [filterName, setFilterName] = useState('');

  const showAdvancedSearch = useSelector(
    (state: RootState) => state.search.showAdvancedSearch,
  );

  return (
    <LayoutWrapper>
      <Navbar />
      <SearchPanel setFilterName={setFilterName} />
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
