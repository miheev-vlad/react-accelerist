import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../globalColors';
import { CapitalLetterHelper } from '../../../helpers/CapitalLetterHelper';

const Input = ({ input, meta }) => {
  const { error, touched, submitError } = meta;

  return (
    <InputRow>
      <InputLabel>{CapitalLetterHelper(input.name)}</InputLabel>
      <StyledInput
        {...input}
        placeholder={`Enter ${input.name}`}
        error={touched && error}
      />
      <ErrorText>{touched && (error || submitError) ? error : ''}</ErrorText>
    </InputRow>
  );
};

export default Input;

export const InputRow = styled.div`
  position: relative;
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
  border: ${({ error }) =>
    error ? `1px solid ${Colors.bean_red}` : `1px solid ${Colors.green_white}`};
  border-radius: 6px;
  font-size: 16px;
  line-height: 155%;
  padding: 11px 31px 11px 16px;
  color: ${Colors.black};
  background-color: ${({ error }) => (error ? 'rgb(255, 242, 242)' : 'none')};
`;

export const InputLabel = styled.label`
  display: inline-block;
  font-size: 12px;
  line-height: 150%;
  color: ${Colors.dark_gray};
  margin-bottom: 4px;
`;

export const ErrorText = styled.p`
  color: ${Colors.bean_red};
  font-size: 12px;
  line-height: 150%;
  margin-left: 2px;
`;
