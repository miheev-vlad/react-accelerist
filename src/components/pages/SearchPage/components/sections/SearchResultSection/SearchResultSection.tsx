import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import { Colors } from '../../../../../../globalColors';
import { ItemsProps } from '../../../../../../redux/ducks';
import { ActivityBar, CompanyCard, PaginationPanel } from './components';

type SearchResultSectionProps = {
  companies: ItemsProps[];
  currentPage: string;
  totalItems: number;
  itemCount: number;
  itemsPerPage: string;
  totalPages: number;
  isCompaniesLoading: boolean;
  changePage({ selected }: any): void;
};

const SearchResultSection: React.FC<SearchResultSectionProps> = ({
  companies,
  currentPage,
  totalItems,
  itemCount,
  itemsPerPage,
  totalPages,
  isCompaniesLoading,
  changePage,
}) => {
  return (
    <SearchResultSectionWrapper>
      <SearchResultContainer>
        <SearchResultTextWrapper>
          <SearchResultTitle>Found {totalItems} companies</SearchResultTitle>
        </SearchResultTextWrapper>
        <ActivityAndPaginationWrapper>
          <ActivityBar />
          <TopPaginationWrapper>
            <PaginationPanel
              pageCount={totalPages}
              changePage={changePage}
              currentPage={+currentPage}
              itemsPerPage={+itemsPerPage}
              companies={companies.length}
              totalItems={totalItems}
            />
          </TopPaginationWrapper>
        </ActivityAndPaginationWrapper>
        {isCompaniesLoading && (
          <LoadingWrapper>
            <ReactLoading
              type="spinningBubbles"
              color={Colors.secondary_blue}
              height={60}
              width={60}
            />
          </LoadingWrapper>
        )}
        {!isCompaniesLoading && companies.length > 0 && (
          <SearchResultWrapper>
            {companies.map((company, index) => (
              <CompanyCard company={company} key={index} />
            ))}
          </SearchResultWrapper>
        )}
        {!isCompaniesLoading && companies.length === 0 && (
          <SearchResultTitle>Nothing to show...</SearchResultTitle>
        )}
        <FooterPaginationWrapper>
          <PaginationPanel
            pageCount={itemCount}
            changePage={changePage}
            currentPage={+currentPage}
            itemsPerPage={+itemsPerPage}
            companies={companies.length}
            totalItems={totalItems}
          />
        </FooterPaginationWrapper>
      </SearchResultContainer>
    </SearchResultSectionWrapper>
  );
};

export default SearchResultSection;

export const SearchResultSectionWrapper = styled.section`
  padding: 32px 248px 32px 60px;
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

export const SearchResultContainer = styled.div`
  width: 100%;
`;

export const SearchResultTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${Colors.black};
`;

export const SearchResultTextWrapper = styled.div`
  position: relative;
  margin-bottom: 26px;
`;

export const SearchResultWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ActivityAndPaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
`;

export const FooterPaginationWrapper = styled.div`
  display: none;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
`;

export const TopPaginationWrapper = styled.div`
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;
