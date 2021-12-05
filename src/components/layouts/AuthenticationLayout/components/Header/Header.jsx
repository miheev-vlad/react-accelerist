import React from 'react';
import styled from 'styled-components';
import { LogoSvgComponent } from '../../../..';
import { Colors } from '../../../../../globalColors';
import { Container } from '../../../../../globalStyles';

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
  width: 100%;
  background-color: ${Colors.black};

  transition: background-color 0.3s ease-in;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  ${Container}
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const LogoText = styled.p`
  margin-left: 16px;
`;
