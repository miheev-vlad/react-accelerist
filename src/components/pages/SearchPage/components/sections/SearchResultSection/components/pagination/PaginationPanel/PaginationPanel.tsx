import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../../../../../../globalColors';
import { PaginationComponent } from '../components';
import {
  MailIconSvgComponent,
  SaveListIconSvgComponent,
  UploadIconSvgComponent,
} from './components';

type PaginationPanelProps = {
  pageCount: number;
  changePage({ selected }: any): void;
  pagesVisited: number;
  companiesPerPage: number;
  companies: any;
};

const PaginationPanel: React.FC<PaginationPanelProps> = ({
  pageCount,
  changePage,
  pagesVisited,
  companiesPerPage,
  companies,
}) => {
  return (
    <PaginationPanelWrapper>
      <PaginationLeftContent>
        <IconWrapper>
          <SaveListIconSvgComponent />
          <IconTextWrapper>
            Save<IconTextSpan> List</IconTextSpan>
          </IconTextWrapper>
        </IconWrapper>
        <IconWrapper>
          <UploadIconSvgComponent />
          <IconTextWrapper>
            Export<IconTextSpan> to Excel</IconTextSpan>
          </IconTextWrapper>
        </IconWrapper>
        <IconWrapper>
          <MailIconSvgComponent />
          <IconTextWrapper>
            <IconTextSpan>Accelerist </IconTextSpan>Support
          </IconTextWrapper>
        </IconWrapper>
      </PaginationLeftContent>
      <PaginationRightUpContent>
        <PaginationComponent
          pageCount={pageCount}
          changePage={changePage}
          pagesVisited={pagesVisited}
          companiesPerPage={companiesPerPage}
          companies={companies}
        />
      </PaginationRightUpContent>
    </PaginationPanelWrapper>
  );
};

export default PaginationPanel;

export const PaginationPanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`;

export const PaginationLeftContent = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;

export const PaginationRightUpContent = styled.div`
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
    margin-right: 92px;
  }

  .paginationDisabled a {
    opacity: 0.4;
  }

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

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

export const IconWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 37px;

  &:hover {
    opacity: 0.65;
  }
`;

export const IconTextWrapper = styled.span`
  margin-left: 10px;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
`;

export const IconTextSpan = styled.span`
  @media screen and (max-width: 540px) {
    display: none;
  }
`;
