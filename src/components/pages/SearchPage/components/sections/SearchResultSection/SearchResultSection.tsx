import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { SearchFilterContext } from '../../../../../../context';
import { Colors } from '../../../../../../globalColors';
import { ActivityBar, CompanyCard, PaginationPanel } from './components';
import { mockSearchData } from './mockData';

const SearchResultSection: React.FC = () => {
  const { filterName } = useContext(SearchFilterContext);
  let [companies] = useState(mockSearchData);
  const [pageNumber, setPageNumber] = useState(0);

  if (filterName && filterName.trim()) {
    companies = companies.filter(company =>
      company.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()),
    );
  }

  const companiesPerPage = 12;
  const pagesVisited = pageNumber * companiesPerPage;

  const pageCount = Math.ceil(companies.length / companiesPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <SearchResultSectionWrapper>
      <SearchResultContainer>
        <SearchResultTextWrapper>
          <SearchResultTitle>
            Found {companies ? companies.length : 0} companies
          </SearchResultTitle>
        </SearchResultTextWrapper>
        <ActivityAndPaginationWrapper>
          <ActivityBar />
          <TopPaginationWrapper>
            <PaginationPanel
              pageCount={pageCount}
              changePage={changePage}
              pagesVisited={pagesVisited}
              companiesPerPage={companiesPerPage}
              companies={companies}
            />
          </TopPaginationWrapper>
        </ActivityAndPaginationWrapper>
        {companies.length > 0 && (
          <SearchResultWrapper>
            {companies
              .slice(pagesVisited, pagesVisited + companiesPerPage)
              .map((company, index) => (
                <CompanyCard company={company} key={index} />
              ))}
          </SearchResultWrapper>
        )}
        {companies.length === 0 && (
          <SearchResultTitle>Nothing to show...</SearchResultTitle>
        )}
        <FooterPaginationWrapper>
          <PaginationPanel
            pageCount={pageCount}
            changePage={changePage}
            pagesVisited={pagesVisited}
            companiesPerPage={companiesPerPage}
            companies={companies}
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
