import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { titleCase } from 'title-case';
import { Colors } from '../../../../../globalColors';
import { useDebouncedCallback } from '../../../../../hooks';
import { RootState } from '../../../../../redux';
import {
  getCompanies,
  setCurrentPage,
  setQueryParams,
} from '../../../../../redux/ducks';
import { Input } from './components';

const SearchPanel: React.FC = () => {
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.auth.token);

  const onChangeHandler = useDebouncedCallback((searchStr: string) => {
    if (!searchStr.trim()) {
      const searchParams = {
        location: [],
      };
      dispatch(getCompanies({ token, page: 1, queryParams: searchParams }));
      dispatch(setCurrentPage({ currentPage: '1' }));
    } else {
      const searchParams = {
        location: searchStr ? [titleCase(searchStr.trim())] : [],
      };
      dispatch(setQueryParams({ queryParams: searchParams }));
      dispatch(setCurrentPage({ currentPage: '1' }));
    }
  }, 1000);

  return (
    <PanelContainer>
      <PanelWrapper>
        <PanelTextWrapper>Search</PanelTextWrapper>
        <Input onChangeHandler={onChangeHandler} />
      </PanelWrapper>
    </PanelContainer>
  );
};

export default SearchPanel;

export const PanelContainer = styled.header`
  margin-top: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  background-color: ${Colors.white};
  font-size: 12px;
  line-height: 150%;

  @media screen and (max-width: 750px) {
    background-color: ${Colors.snow_drift};
    padding-top: 16px;
  }
`;

export const PanelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 60px;

  @media screen and (max-width: 1020px) {
    padding: 0 32px;
  }

  @media screen and (max-width: 376px) {
    padding: 0 16px;
  }
`;

export const PanelTextWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 82px;
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;

  @media screen and (max-width: 1044px) {
    margin-right: 60px;
  }

  @media screen and (max-width: 1028px) {
    margin-right: 32px;
    font-size: 28px;
  }

  @media screen and (max-width: 860px) {
    font-size: 28px;
  }

  @media screen and (max-width: 750px) {
    font-size: 16px;
    line-height: 145%;
    margin-bottom: 8px;
  }
`;

export const SearchInputWrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  margin-right: 28px;
`;

export const StyledForm = styled.form`
  @media screen and (max-width: 787px) {
    width: 81%;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
