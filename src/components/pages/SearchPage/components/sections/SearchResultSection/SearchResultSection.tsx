import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../../../globalColors';
import { CompanyCard, FooterPagination, PaginationPanel } from './components';
import { mockSearchData } from './mockData';

type SearchResultSectionProps = {
  filterName: string;
};

const SearchResultSection: React.FC<SearchResultSectionProps> = ({
  filterName,
}) => {
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
        <PaginationPanel
          pageCount={pageCount}
          changePage={changePage}
          pagesVisited={pagesVisited}
          companiesPerPage={companiesPerPage}
          companies={companies}
        />
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
        <FooterPagination
          pageCount={pageCount}
          changePage={changePage}
          pagesVisited={pagesVisited}
          companiesPerPage={companiesPerPage}
          companies={companies}
        />
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
