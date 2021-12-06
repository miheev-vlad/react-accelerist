import React from 'react';
import styled from 'styled-components';
import { LogoSvgComponent } from '../../../..';
import { Colors } from '../../../../../globalColors';

const Header = () => {
  return (
    <LogoHeader>
      <HeaderContainer>
        <LogoWrapper>
          <LogoSvgComponent />
          <LogoText>ACCELERIST</LogoText>
        </LogoWrapper>
      </HeaderContainer>
    </LogoHeader>
  );
};

export default Header;

export const LogoHeader = styled.header`
  margin-bottom: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  min-width: 100vw;
  background-color: ${Colors.black};

  transition: background-color 0.3s ease-in;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.p`
  margin-left: 16px;
  color: #fff;
`;
