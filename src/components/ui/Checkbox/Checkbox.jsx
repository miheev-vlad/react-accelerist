import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../globalColors';

const Checkbox = ({ input }) => {
  return <StyledCheckbox {...input} />;
};

export default Checkbox;

export const StyledCheckbox = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;

  &:before {
    content: '✔';
    font-size: 14px;
    color: transparent !important;
    display: block;
    text-align: center;
    width: 20px;
    height: 20px;
    border: 1px solid ${Colors.green_white};
    border-radius: 3px;
    margin-right: 11px;
  }

  &:checked:before {
    color: ${Colors.black} !important;
    background: ${Colors.pale_blue_lily};
  }
`;
