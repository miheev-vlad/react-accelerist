import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled from 'styled-components';
import { Colors } from '../../../../../../../../../../globalColors';

type SelectInputProps = {
  label: string;
  options: string[];
};

const SelectInput: React.FC<
  FieldRenderProps<string, HTMLElement> & SelectInputProps
> = ({ input, label, options }) => {
  return (
    <SelectRow>
      <SelectLabel>{label}</SelectLabel>
      <StyledSelect {...input}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option.trim() ? option : 'Select'}
          </option>
        ))}
      </StyledSelect>
    </SelectRow>
  );
};

export default SelectInput;

export const SelectRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledSelect = styled.select`
  display: block;
  outline: none;
  width: 100%;
  height: 46px;
  border: 1px solid ${Colors.green_white};
  border-radius: 6px;
  font-size: 16px;
  line-height: 155%;
  padding: 11px 31px 11px 16px;
  color: ${Colors.black};
  background-color: ${Colors.white};

  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE0IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNyA3TDEzIDEiIHN0cm9rZT0iIzEyMjQzNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==);
  background-repeat: no-repeat;
  background-position-x: 94%;
  background-position-y: 20px;
`;

export const SelectLabel = styled.label`
  display: inline-block;
  font-size: 12px;
  line-height: 150%;
  color: ${Colors.dark_gray};
  margin-bottom: 4px;
`;
