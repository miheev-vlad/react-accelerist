import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Colors } from '../../../../../../../globalColors';
import { RootState } from '../../../../../../../redux';
import { toggleShowAdvancedSearch } from '../../../../../../../redux/ducks';
import {
  AdvancedSearchIconSvgComponent,
  SearchIconSvgComponent,
} from '../../../../../../ui';

type InputProps = {
  onChangeHandler(searchStr: string): void;
};

const Input: React.FC<InputProps> = ({ onChangeHandler }) => {
  const dispatch = useDispatch();

  const showAdvancedSearch = useSelector(
    (state: RootState) => state.search.showAdvancedSearch,
  );

  const advancedSearchIconClickHandler = () => {
    dispatch(toggleShowAdvancedSearch());
  };

  return (
    <InputRow>
      <StyledInput
        type="text"
        placeholder={'Search location'}
        onKeyUp={event => {
          onChangeHandler((event.target as HTMLInputElement).value);
        }}
      />
      <IconsContainer>
        <AdvancedSearchIconWrapper onClick={advancedSearchIconClickHandler}>
          <AdvancedSearchIconSvgComponent
            fillColor={
              showAdvancedSearch ? `${Colors.blue}` : `${Colors.smokey_grey}`
            }
          />
        </AdvancedSearchIconWrapper>
        <SearchIconSvgComponent />
      </IconsContainer>
    </InputRow>
  );
};

export default Input;

export const InputRow = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledInput = styled.input.attrs(
  (props: { error: boolean }) => props,
)`
  display: block;
  outline: none;
  width: 715px;
  height: 36px;
  border: ${({ error }) =>
    error ? `1px solid ${Colors.bean_red}` : `1px solid ${Colors.green_white}`};
  border-radius: 6px;
  font-size: 12px;
  line-height: 150%;
  line-height: 155%;
  padding: 9px 70px 9px 24px;
  color: ${Colors.black};
  background-color: ${({ error }) =>
    error ? 'rgb(255, 242, 242)' : `${Colors.aqua_haze}`};

  @media screen and (max-width: 1028px) {
    width: 576px;
  }

  @media screen and (max-width: 787px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const IconsContainer = styled.div`
  position: absolute;
  top: 6px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 56px;
`;

export const AdvancedSearchIconWrapper = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
