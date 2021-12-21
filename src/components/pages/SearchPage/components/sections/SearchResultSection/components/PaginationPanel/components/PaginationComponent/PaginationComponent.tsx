import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { Colors } from '../../../../../../../../../../globalColors';
import { ChevronLeft, ChevronRight } from '../../../../../../../../../ui';
import { ChangePageProps } from '../../../../../../../SearchPage';

type PaginationComponentProps = {
  pageCount: number;
  changePage({ selected }: ChangePageProps): void;
  currentPage: number;
  itemsPerPage: number;
  companies: number;
  totalItems: number;
};

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  pageCount,
  changePage,
  currentPage,
  itemsPerPage,
  companies,
  totalItems,
}) => {
  const pageCounterTextGenerator = (): string => {
    return `${(currentPage - 1) * itemsPerPage + 1}-${
      (currentPage - 1) * itemsPerPage + companies
    }${' '}of ${totalItems}`;
  };

  if (companies === 0) {
    return <></>;
  }

  return (
    <>
      <ReactPaginate
        previousLabel={<ChevronLeft />}
        nextLabel={<ChevronRight />}
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
  width: 84%;
  margin-left: -19px;
`;

export const PageCounterText = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${Colors.black};
`;
