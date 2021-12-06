import React from 'react';
import styled from 'styled-components';
import HideIconSvgComponent from './components/HideIconSvgComponent/HideIconSvgComponent';

const HidePasswordIcon = ({ setIsShowPassword, isShowPassword }) => {
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
  top: -33px;
  right: 16px;
  cursor: pointer;
`;
