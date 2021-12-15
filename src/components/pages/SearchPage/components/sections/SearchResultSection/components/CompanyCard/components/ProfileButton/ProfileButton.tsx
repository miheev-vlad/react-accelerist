import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../../../../../../../globalColors';

type ProfileButtonProps = {
  onClickHandler?(): void;
};

const ProfileButton: React.FC<ProfileButtonProps> = ({
  onClickHandler,
  children,
}) => {
  return <StyledButton onClick={onClickHandler}>{children}</StyledButton>;
};

export default ProfileButton;

export const StyledButton = styled.button`
  width: 100%;
  height: 36px;
  color: ${Colors.black};
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  border: 1px solid ${Colors.butterfly_blue};
  background-color: transparent;
  border-radius: 6px;
  padding: 9px 0;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: ${Colors.butterfly_blue};
    color: ${Colors.white};
    opacity: 0.7;
  }
`;
