import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { Colors } from '../../../../../../../../../../globalColors';
import {
  ChevronLeftIconSvgComponent,
  ChevronRightIconSvgComponent,
} from './components';

type PaginationComponentProps = {
  pageCount: number;
  changePage({ selected }: any): void;
  pagesVisited: number;
  companiesPerPage: number;
  companies: any;
};

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  pageCount,
  changePage,
  pagesVisited,
  companiesPerPage,
  companies,
}) => {
  const pageCounterTextGenerator = (): string => {
    return `${companies && companies.length === 0 ? 0 : pagesVisited + 1}-${
      pagesVisited +
      companies.slice(pagesVisited, pagesVisited + companiesPerPage).length
    }${' '}of ${companies.length}`;
  };

  if (companies && companies.length === 0) {
    return <></>;
  }

  return (
    <>
      <ReactPaginate
        previousLabel={<ChevronLeftIconSvgComponent />}
        nextLabel={<ChevronRightIconSvgComponent />}
        pageCount={pageCount}
        onPageChange={changePage}
        disabledClassName={'paginationDisabled'}
      />
      <PageCounterWrapper>
        <PageCounterText>{pageCounterTextGenerator()}</PageCounterText>
      </PageCounterWrapper>
    </>
  );
};

export default PaginationComponent;

export const PageCounterWrapper = styled.div`
  position: absolute;
  top: 1px;
  left: 30px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-left: -19px;
`;

export const PageCounterText = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${Colors.black};
`;
