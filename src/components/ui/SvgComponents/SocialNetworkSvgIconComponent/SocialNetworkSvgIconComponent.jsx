import React from 'react';
import styled from 'styled-components';
import { SocialNetworkSvgIcon } from './components';

const SocialNetworkSvgIconComponent = () => {
  return (
    <SocialNetworkSvgIconWrapper>
      <SocialNetworkLink
        href="https://ru.wikipedia.org/wiki/LinkedIn"
        target="blank">
        <SocialNetworkSvgIcon />
      </SocialNetworkLink>
    </SocialNetworkSvgIconWrapper>
  );
};

export default SocialNetworkSvgIconComponent;

export const SocialNetworkSvgIconWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const SocialNetworkLink = styled.a`
  text-decoration: none;
`;
