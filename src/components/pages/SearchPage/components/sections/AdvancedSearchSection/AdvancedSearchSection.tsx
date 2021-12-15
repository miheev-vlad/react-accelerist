import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../../../globalColors';
import { MultiButtons, SearchForm } from './components';

const AdvancedSearchSection: React.FC = () => {
  return (
    <AdvancedSearchSectionWrapper>
      <AdvancedSearchContainer>
        <AdvancedSearchTextWrapper>
          <AdvancedSearchTitle>Filters</AdvancedSearchTitle>
        </AdvancedSearchTextWrapper>
        <MultiButtonsUpWrapper>
          <MultiButtons titles={['Advanced', 'Customize']} />
        </MultiButtonsUpWrapper>
        <SearchForm />
      </AdvancedSearchContainer>
    </AdvancedSearchSectionWrapper>
  );
};

export default AdvancedSearchSection;

export const AdvancedSearchSectionWrapper = styled.section`
  padding: 29px 248px 32px 60px;
  background: ${Colors.snow_drift};
  width: 100%;

  @media screen and (max-width: 1450px) {
    padding: 32px 60px 32px 60px;
  }

  @media screen and (max-width: 1020px) {
    padding: 32px;
  }

  @media screen and (max-width: 376px) {
    padding: 16px;
  }
`;

export const AdvancedSearchContainer = styled.div`
  width: 100%;
  background: ${Colors.white};
  padding: 40px 40px 32px 40px;
  border-radius: 6px;

  @media screen and (max-width: 1020px) {
    padding: 32px 24px;
  }

  @media screen and (max-width: 376px) {
    padding: 24px 16px;
  }
`;

export const AdvancedSearchTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${Colors.black};
  margin-bottom: 18px;
`;

export const AdvancedSearchTextWrapper = styled.div`
  position: relative;
  margin-bottom: 26px;
`;

export const MultiButtonsUpWrapper = styled.div`
  margin-bottom: 34px;
`;
