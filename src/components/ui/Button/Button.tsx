import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../globalColors';

type ButtonProps = {
  onClickHandler?(): void;
  disabled?: boolean;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  isCancel?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onClickHandler,
  children,
  disabled,
  buttonType,
  isCancel = false,
}) => {
  return (
    <StyledButton
      isCancel={isCancel}
      onClick={onClickHandler}
      disabled={disabled}
      type={buttonType}>
      {children}
    </StyledButton>
  );
};

export default Button;

export const StyledButton = styled.button.attrs(
  (props: { isCancel: boolean }) => props,
)`
  width: 100%;
  height: 46px;
  color: ${({ isCancel }) =>
    isCancel ? `${Colors.black}` : `${Colors.white}`};
  font-size: 16px;
  line-height: 145%;
  border: 0;
  background-color: ${({ isCancel }) =>
    isCancel ? 'transparent' : `${Colors.blue}`};
  border-radius: 6px;
  padding: 12px 0;
  cursor: pointer;
  transition: 0.4s;
  border: ${({ isCancel }) =>
    isCancel ? `1px solid ${Colors.green_white}` : 'none'};

  &:hover {
    background-color: ${({ isCancel }) =>
      isCancel ? `${Colors.black}` : `${Colors.pale_blue_lily}`};
    color: ${({ isCancel }) =>
      isCancel ? `${Colors.white}` : `${Colors.blue}`};
    border: ${({ isCancel }) =>
      isCancel ? `1px solid ${Colors.black}` : 'none'};
    opacity: ${({ isCancel }) => (isCancel ? `0.6` : '1')};
  }

  &:disabled {
    background-color: ${({ isCancel }) =>
      isCancel ? `${Colors.black}` : `${Colors.pale_blue_lily}`};
    color: ${({ isCancel }) =>
      isCancel ? `${Colors.white}` : `${Colors.blue}`};
    border: ${({ isCancel }) =>
      isCancel ? `1px solid ${Colors.black}` : 'none'};
    opacity: ${({ isCancel }) => (isCancel ? `0.6` : '1')};
  }
`;
