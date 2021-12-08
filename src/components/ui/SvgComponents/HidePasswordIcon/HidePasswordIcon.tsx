import React from 'react';
import styled from 'styled-components';
import { HideIconSvgComponent } from './components';

type HidePasswordIconProps = {
  setIsShowPassword(v: boolean): void;
  isShowPassword: boolean;
};

const HidePasswordIcon: React.FC<HidePasswordIconProps> = ({
  setIsShowPassword,
  isShowPassword,
}) => {
  return (
    <HideIconContainer>
      <HideIconWrapper onClick={() => setIsShowPassword(!isShowPassword)}>
        <HideIconSvgComponent />
      </HideIconWrapper>
    </HideIconContainer>
  );
};

export default HidePasswordIcon;

export const HideIconContainer = styled.div`
  position: relative;
`;

export const HideIconWrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  cursor: pointer;
  z-index: 50;
`;
