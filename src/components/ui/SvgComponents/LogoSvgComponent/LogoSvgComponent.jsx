import React from 'react';
import styled from 'styled-components';
import { LogoTextSvgComponent } from './components';
import { LogoIconSvgComponent } from './components';

const LogoSvgComponent = () => {
  return (
    <LogoWrapper>
      <span style={{ marginRight: 16 }}>
        <LogoIconSvgComponent />
      </span>
      <LogoTextSvgComponent />
    </LogoWrapper>
  );
};

export default LogoSvgComponent;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
