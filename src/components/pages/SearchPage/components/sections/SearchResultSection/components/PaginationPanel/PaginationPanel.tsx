import React from 'react';
import styled from 'styled-components';
import { PaginationComponent } from './components';

type PaginationPanelProps = {
  pageCount: number;
  changePage({ selected }: any): void;
  currentPage: number;
  itemsPerPage: number;
  companies: number;
  totalItems: number;
};

const PaginationPanel: React.FC<PaginationPanelProps> = ({
  pageCount,
  changePage,
  currentPage,
  itemsPerPage,
  companies,
  totalItems,
}) => {
  return (
    <PaginationPanelContainer>
      <PaginationComponent
        pageCount={pageCount}
        changePage={changePage}
        currentPage={+currentPage}
        itemsPerPage={+itemsPerPage}
        companies={companies}
        totalItems={totalItems}
      />
    </PaginationPanelContainer>
  );
};

export default PaginationPanel;

export const PaginationPanelContainer = styled.div`
  position: relative;
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
    margin-right: 110px;
  }

  .paginationDisabled a {
    opacity: 0.4;
  }
`;
