import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../globalColors';
import { CapitalLetterHelper } from '../../../helpers/CapitalLetterHelper';

const Input = ({ input }) => {
  return (
    <InputRow>
      <InputLabel>{CapitalLetterHelper(input.name)}</InputLabel>
      <StyledInput {...input} placeholder={`Enter ${input.name}`} />
    </InputRow>
  );
};

export default Input;

export const InputRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin-top: 24px;
`;

export const StyledInput = styled.input`
  display: block;
  outline: none;
  width: 100%;
  border: 1px solid ${Colors.green_white};
  border-radius: 6px;
  font-size: 16px;
  line-height: 155%;
  padding: 11px 31px 11px 16px;
  color: ${Colors.black};
`;

export const InputLabel = styled.label`
  display: inline-block;
  font-size: 12px;
  line-height: 150%;
  color: ${Colors.dark_gray};
  margin-bottom: 4px;
`;
