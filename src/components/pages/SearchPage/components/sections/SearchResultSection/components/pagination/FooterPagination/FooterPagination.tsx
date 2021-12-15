import React from 'react';
import styled from 'styled-components';
import { PaginationComponent } from '../components';

type FooterPaginationProps = {
  pageCount: number;
  changePage({ selected }: any): void;
  pagesVisited: number;
  companiesPerPage: number;
  companies: any;
};

const FooterPagination: React.FC<FooterPaginationProps> = ({
  pageCount,
  changePage,
  pagesVisited,
  companiesPerPage,
  companies,
}) => {
  return (
    <SearchFooterContainer>
      <PaginationRightDownContent>
        {' '}
        <PaginationComponent
          pageCount={pageCount}
          changePage={changePage}
          pagesVisited={pagesVisited}
          companiesPerPage={companiesPerPage}
          companies={companies}
        />
      </PaginationRightDownContent>
    </SearchFooterContainer>
  );
};

export default FooterPagination;

export const SearchFooterContainer = styled.div`
  display: none;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
`;

export const PaginationRightDownContent = styled.div`
  position: relative;
  display: none;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;

    ul {
      list-style: none;
      display: flex;
      justify-content: center;
    }

    a {
      cursor: pointer;
    }

    a:hover {
      opacity: 0.6;
    }

    li {
      display: none;
    }

    li:first-child,
    li:last-child {
      display: list-item;
    }

    li:first-child {
      margin-right: 92px;
    }

    .paginationDisabled a {
      opacity: 0.4;
    }
  }
`;
