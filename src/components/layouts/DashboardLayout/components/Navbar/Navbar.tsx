import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../../../globalColors';
import {
  EmblemBigSvgComponent,
  EmblemSmallSvgComponent,
  HamburgerMenuIconSvgComponent,
  TimesSvgIconComponent,
  UnitedNationsBigLogoSvgComponent,
  UnitedNationsSmallLogoSvgComponent,
} from './components';

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = show ? 'hidden' : 'auto';
    }
  }, [show]);

  const backdropClickHandler = () => {
    setShow(false);
  };

  return (
    <EmblemHeader>
      <EmblemContainer>
        <EmblemBigWrapper>
          <EmblemBigSvgComponent />
        </EmblemBigWrapper>
        <EmblemSmallWrapper>
          <EmblemSmallSvgComponent />
        </EmblemSmallWrapper>
        <MobileIcon>
          {show ? (
            <MobileIconWrapper onClick={handleClick}>
              <TimesSvgIconComponent />
            </MobileIconWrapper>
          ) : (
            <MobileIconWrapper onClick={handleClick}>
              <HamburgerMenuIconSvgComponent />
            </MobileIconWrapper>
          )}
        </MobileIcon>
        {show && <BackdropLayout onClick={backdropClickHandler} />}
        <NavbarMenu show={show}>
          <LeftContent>
            <NavbarItem>
              <NavbarLinks to="/dashboard">Dashboard</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="/audience">Audience</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="/pricing">Pricing</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="/prospecting">Prospecting</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="/roi">ROI</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="/upgrade_membership">
                Upgrade Membership
              </NavbarLinks>
            </NavbarItem>
          </LeftContent>
          <RightContent>
            {show ? (
              <UnitedNationsBigLogoSvgComponent />
            ) : (
              <UnitedNationsSmallLogoSvgComponent />
            )}
          </RightContent>
        </NavbarMenu>
      </EmblemContainer>
    </EmblemHeader>
  );
};

export default Navbar;

export const EmblemHeader = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  min-width: 100%;
  background-color: ${Colors.iceberg};
  font-size: 12px;
  line-height: 150%;
`;

export const EmblemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 60px;

  @media screen and (max-width: 1020px) {
    padding: 0 32px;
  }

  @media screen and (max-width: 376px) {
    padding: 0 16px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  @media screen and (max-width: 860px) {
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    font-size: 16px;
    line-height: 155%;
  }
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavbarMenu = styled.ul.attrs((props: { show: boolean }) => props)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  text-align: center;
  width: 100%;
  z-index: 101;

  @media screen and (max-width: 860px) {
    flex-direction: column;
    width: 330px;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    opacity: ${({ show }) => (show ? 1 : 0.6)};
    visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
    transform: translateY(${({ show }) => (show ? '0' : '-10px')});
    transition: opacity 1s ease;
    background-color: ${Colors.white};
    align-items: flex-start;
    padding: 132px 0 32px 40px;
  }

  @media screen and (max-width: 376px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export const NavbarItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  margin-right: 28px;

  &:last-child {
    margin-right: 0;
  }

  &:first-child {
    font-weight: 500;
  }

  @media screen and (max-width: 1020px) {
    margin-right: 14px;
  }

  @media screen and (max-width: 860px) {
    height: 25px;
    margin-bottom: 32px;
  }
`;

export const NavbarLinks = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: ${Colors.black};

  &.active {
    font-weight: bold;
    transition: all 0.3s ease;
  }

  &:hover {
    opacity: 0.7;
    transition: all 0.3s ease;
  }
`;

export const EmblemBigWrapper = styled.div`
  display: flex;
  margin-right: 49px;

  @media screen and (max-width: 1020px) {
    margin-right: 20px;
  }

  @media screen and (max-width: 376px) {
    display: none;
  }
`;

export const EmblemSmallWrapper = styled.div`
  display: none;

  @media screen and (max-width: 376px) {
    display: flex;
    margin-right: 20px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 102;

  @media screen and (max-width: 860px) {
    display: flex;
    width: 100%;
    justify-content: end;
  }
`;

export const MobileIconWrapper = styled.div`
  cursor: pointer;
`;

export const BackdropLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease;

  @media screen and (min-width: 860px) {
    display: none;
  }
`;
