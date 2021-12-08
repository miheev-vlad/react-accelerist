import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../../globalColors';
import LogoSvgComponent from '../../../../ui/SvgComponents/LogoSvgComponent/LogoSvgComponent';

const Header: React.FC = () => {
  return (
    <LogoHeader>
      <HeaderContainer>
        <LogoSvgComponent />
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
  min-width: 100%;
  background-color: ${Colors.black};

  transition: background-color 0.3s ease-in;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
