import React from 'react';
import styled from 'styled-components';
import SocialNetworkSvgIcon from './components/SocialNetworkSvgIcon';

const SocialNetworkSvgIconComponent = () => {
  return (
    <SocialNetworkSvgIconWrapper>
      <SocialNetworkSvgIcon />
    </SocialNetworkSvgIconWrapper>
  );
};

export default SocialNetworkSvgIconComponent;

export const SocialNetworkSvgIconWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
