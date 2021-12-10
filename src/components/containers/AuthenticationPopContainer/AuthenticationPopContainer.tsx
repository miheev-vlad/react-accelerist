import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import { Colors } from '../../../globalColors';

type AuthenticationPopContainerProps = {
  title: string;
  text: string;
  isLoading?: boolean;
  errorMessage?: string;
};

const AuthenticationPopContainer: React.FC<AuthenticationPopContainerProps> = ({
  title,
  text,
  children,
  isLoading,
  errorMessage,
}) => {
  return (
    <FormSection>
      <FormContainer>
        <FormRow>
          <FormColumn>
            <FormTitleWrapper>
              <FormTitle>{title}</FormTitle>
            </FormTitleWrapper>
            <InformationTextWrapper>
              <InformationText>{text}</InformationText>
            </InformationTextWrapper>
            {isLoading && (
              <LoginWrapper>
                <ReactLoading
                  type="spinningBubbles"
                  color={Colors.secondary_blue}
                  height={60}
                  width={60}
                />
              </LoginWrapper>
            )}
            {errorMessage && !isLoading && (
              <ErrorsContainer>
                <ErrorsWrapper>
                  <ErrorsMessageParagraph>
                    {errorMessage}
                  </ErrorsMessageParagraph>
                </ErrorsWrapper>
              </ErrorsContainer>
            )}
            {children}
          </FormColumn>
        </FormRow>
      </FormContainer>
    </FormSection>
  );
};

export default AuthenticationPopContainer;

export const FormSection = styled.div`
  padding-top: 153px;
  width: 100%;

  @media screen and (max-width: 500px) {
    min-height: 311px;
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
  margin-bottom: 8px;
  font-size: 24px;
  line-height: 148%;
  font-weight: bold;
  color: ${Colors.black};
`;

export const FormTitleWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
`;

export const InformationText = styled.p`
  color: ${Colors.black};
  font-size: 16px;
  line-height: 155%;
`;

export const InformationTextWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding-right: 50px;
  margin-bottom: 8px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const ErrorsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

export const ErrorsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

export const ErrorsMessageParagraph = styled.p`
  padding: 10px;
  color: ${Colors.bean_red};
  background-color: rgb(255, 242, 242);
  border: 1px solid ${Colors.bean_red};
  border-radius: 6px;
  width: 100%;
  font-size: 14px;
  line-height: 150%;
`;
