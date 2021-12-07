import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../globalColors';

const ReturnLink = ({ children, path }) => {
  return (
    <ReturnLinkWrapper>
      <StyledLink to={path}>{children}</StyledLink>
    </ReturnLinkWrapper>
  );
};

export default ReturnLink;

export const ReturnLinkWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.white};
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  width: 138px;
  height: 36px;
  padding: 9px 24px;
  background: rgba(18, 36, 52, 0.15);
  border-radius: 6px;

  &:hover {
    background: rgba(18, 36, 52, 0.3);
  }
`;
