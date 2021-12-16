import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../redux';
import { AdvancedSearchSection, SearchResultSection } from './components';

const SearchPage: React.FC = () => {
  const showAdvancedSearch = useSelector(
    (state: RootState) => state.search.showAdvancedSearch,
  );

  return (
    <SearchPageContainer>
      {!showAdvancedSearch && <SearchResultSection />}
      {showAdvancedSearch && <AdvancedSearchSection />}
    </SearchPageContainer>
  );
};

export default SearchPage;

export const SearchPageContainer = styled.div`
  width: 100%;
`;
