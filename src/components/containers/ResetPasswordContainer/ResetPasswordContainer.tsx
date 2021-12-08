import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../globalColors';

type ResetPasswordContainerProps = {
  title: string;
  handleSubmit?(): void;
  text: string;
};

const ResetPasswordContainer: React.FC<ResetPasswordContainerProps> = ({
  title,
  text,
  handleSubmit,
  children,
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
            <FormWrapper onSubmit={handleSubmit}>{children}</FormWrapper>
          </FormColumn>
        </FormRow>
      </FormContainer>
    </FormSection>
  );
};

export default ResetPasswordContainer;

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

export const FormWrapper = styled.form`
  width: 100%;
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
