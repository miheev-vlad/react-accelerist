import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../globalColors';
import { NavigationDataProps } from '../../../navigation';

type AuthenticationFormContainerProps = {
  title: string;
  navigationData?: NavigationDataProps;
  small?: boolean;
};

const AuthenticationFormContainer: React.FC<
  AuthenticationFormContainerProps
> = ({ title, children, navigationData }) => {
  return (
    <FormSection>
      <FormContainer>
        <FormRow>
          <FormColumn>
            <FormTitle>{title}</FormTitle>
            {navigationData && (
              <LinkButtonWrapper>
                <LinkButton to={navigationData.register.to}>
                  {navigationData.register.text}
                </LinkButton>
                <LinkButton to={navigationData.login.to}>
                  {navigationData.login.text}
                </LinkButton>
              </LinkButtonWrapper>
            )}
            {children}
          </FormColumn>
        </FormRow>
      </FormContainer>
    </FormSection>
  );
};

export default AuthenticationFormContainer;

export const FormSection = styled.div`
  padding-top: 153px;
  width: 100%;

  @media screen and (max-width: 500px) {
    min-height: 667px;
    padding-top: 100px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 16px;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

export const FormColumn = styled.div`
  background: white;
  flex: 1;
  max-width: 454px;
  min-height: 630px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  padding: 40px;

  @media screen and (max-width: 500px) {
    max-width: 343px;
    padding: 24px 16px 24px 16px;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 27px;
  font-size: 24px;
  line-height: 148%;
  font-weight: bold;
  color: ${Colors.black};
`;

export const LinkButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 6px;
  background-color: ${Colors.desert_storm};
  margin-bottom: 10px;
  padding: 2px;
`;

export const LinkButton = styled(NavLink)`
  text-decoration: none;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${Colors.dark_gray};
  background: ${Colors.desert_storm};
  border-radius: 6px;
  width: 183px;
  height: 36px;
  text-align: center;
  padding: 9px 0;

  &.active {
    color: ${Colors.black};
    background: ${Colors.secondary_blue};
  }
`;
