import React from 'react';
import styled from 'styled-components';
import {
  MailIconSvgComponent,
  SaveListIconSvgComponent,
  UploadIconSvgComponent,
} from './components';

const ActivityBar: React.FC = () => {
  return (
    <ActivityBarContainer>
      <IconWrapper>
        <SaveListIconSvgComponent />
        <IconTextWrapper>
          Save<IconTextSpan> List</IconTextSpan>
        </IconTextWrapper>
      </IconWrapper>
      <IconWrapper>
        <UploadIconSvgComponent />
        <IconTextWrapper>
          Export<IconTextSpan> to Excel</IconTextSpan>
        </IconTextWrapper>
      </IconWrapper>
      <IconWrapper>
        <MailIconSvgComponent />
        <IconTextWrapper>
          <IconTextSpan>Accelerist </IconTextSpan>Support
        </IconTextWrapper>
      </IconWrapper>
    </ActivityBarContainer>
  );
};

export default ActivityBar;

export const ActivityBarContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 37px;

  &:hover {
    opacity: 0.65;
  }
`;

export const IconTextWrapper = styled.span`
  margin-left: 10px;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
`;

export const IconTextSpan = styled.span`
  @media screen and (max-width: 540px) {
    display: none;
  }
`;
