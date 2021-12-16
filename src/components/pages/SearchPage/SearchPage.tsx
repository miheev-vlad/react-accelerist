import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Colors } from '../../../globalColors';
import { RootState } from '../../../redux';
import { AdvancedSearchSection, SearchResultSection } from './components';

const SearchPage: React.FC = () => {
  const [filterName, setFilterName] = useState('');

  const showAdvancedSearch = useSelector(
    (state: RootState) => state.search.showAdvancedSearch,
  );

  return (
    <SearchPageContainer>
      {!showAdvancedSearch && <SearchResultSection filterName={filterName} />}
      {showAdvancedSearch && <AdvancedSearchSection />}
    </SearchPageContainer>
  );
};

export default SearchPage;

export const SearchPageContainer = styled.div`
  width: 100%;
`;
