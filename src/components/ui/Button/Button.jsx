import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../globalColors';

const Button = ({ onClickHandler, children }) => {
  return <StyledButton onClick={onClickHandler}>{children}</StyledButton>;
};

export default Button;

export const StyledButton = styled.button`
  width: 100%;
  height: 46px;
  color: ${Colors.white};
  font-size: 16px;
  line-height: 145%;
  border: 0;
  background-color: ${Colors.blue};
  border-radius: 6px;
  padding: 12px 0;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: ${Colors.pale_blue_lily};
    color: ${Colors.blue};
  }
`;
