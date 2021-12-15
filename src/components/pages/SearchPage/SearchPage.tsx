import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Colors } from '../../../globalColors';
import { RootState } from '../../../redux';
import {
  AdvancedSearchSection,
  Navbar,
  SearchPanel,
  SearchResultSection,
} from './components';

const SearchPage: React.FC = () => {
  const [filterName, setFilterName] = useState('');

  const showAdvancedSearch = useSelector(
    (state: RootState) => state.search.showAdvancedSearch,
  );

  return (
    <SearchPageContainer>
      <Navbar />
      <SearchPanel setFilterName={setFilterName} />
      {!showAdvancedSearch && <SearchResultSection filterName={filterName} />}
      {showAdvancedSearch && <AdvancedSearchSection />}
    </SearchPageContainer>
  );
};

export default SearchPage;

export const SearchPageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${Colors.snow_drift};
`;
