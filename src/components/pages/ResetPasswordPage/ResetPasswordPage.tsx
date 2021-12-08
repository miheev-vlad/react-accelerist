import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { AuthenticationPopContainer } from '../../containers';
import { Button, Input, ReturnLink } from '../../ui';

const ResetPasswordPage = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <>
      {showPopUp ? (
        <>
          <AuthenticationPopContainer
            title={'Password Reset'}
            text={
              'A link was sent to your email to confirm password reset and create a new one'
            }>
            <ButtonWrapper>
              <Button onClickHandler={() => {}} buttonType="button">
                Resend
              </Button>
            </ButtonWrapper>
          </AuthenticationPopContainer>
          <ContactSupportContainer>
            <ReturnLink path="/auth/register">Contact Support</ReturnLink>
          </ContactSupportContainer>
          <ReturnLinkContainer>
            <ReturnLink path="/auth/login">Return to Login</ReturnLink>
          </ReturnLinkContainer>
        </>
      ) : (
        <>
          <AuthenticationPopContainer
            title={'Password Reset'}
            text={
              'Enter your email to receive instructions on how to reset your password.'
            }>
            <Form
              onSubmit={(values, form) => {
                console.log(values);
                form.reset();
                setShowPopUp(true);
              }}
              render={({ handleSubmit }) => {
                return (
                  <StyledForm onSubmit={handleSubmit}>
                    <Field
                      name="email"
                      component={Input}
                      label="Email"
                      type="text"
                      validate={v => (v ? undefined : 'Email is Required')}
                    />
                    <ButtonWrapper>
                      <Button buttonType="submit">Reset</Button>
                    </ButtonWrapper>
                  </StyledForm>
                );
              }}
            />
          </AuthenticationPopContainer>
          <ReturnLinkContainer>
            <ReturnLink path="/auth/login">Return to Login</ReturnLink>
          </ReturnLinkContainer>
        </>
      )}
    </>
  );
};

export default ResetPasswordPage;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const ReturnLinkContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 960px;

  @media screen and (max-width: 500px) {
    top: 623px;
  }
`;

export const ContactSupportContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 32px;
`;

export const StyledForm = styled.form`
  width: 100%;
`;
