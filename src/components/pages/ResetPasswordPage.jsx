import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { ResetPasswordContainer } from '../containers';
import { Button, Input, ReturnLink } from '../ui';

const ResetPasswordPage = () => {
  const showPopUp = false;
  const [showCountdown, setShowCountdown] = useState(false);

  return (
    <>
      {showPopUp ? (
        <>
          <ResetPasswordContainer
            title={'Password Reset'}
            text={
              'A link was sent to your email to confirm password reset and create a new one'
            }>
            <ButtonWrapper>
              <Button
                disabled={showCountdown}
                onClickHandler={e => {
                  e.preventDefault();
                  setShowCountdown(!showCountdown);
                }}>
                {showCountdown ? '00:37' : 'Resend'}
              </Button>
            </ButtonWrapper>
          </ResetPasswordContainer>
          <ContactSupportContainer>
            <ReturnLink path="/auth/register">Contact Support</ReturnLink>
          </ContactSupportContainer>
          <ReturnLinkContainer>
            <ReturnLink path="/auth/login">Return to Login</ReturnLink>
          </ReturnLinkContainer>
        </>
      ) : (
        <>
          <Form
            onSubmit={(values, form) => {
              console.log(values);
              form.reset();
            }}
            render={({ handleSubmit, form }) => {
              return (
                <>
                  <ResetPasswordContainer
                    title={'Password Reset'}
                    handleSubmit={handleSubmit}
                    text={
                      'Enter your email to receive instructions on how to reset your password.'
                    }>
                    <Field
                      name="email"
                      component={Input}
                      label="Email"
                      type="text"
                      validate={v => (v ? undefined : 'Email is Required')}
                    />
                    <ButtonWrapper>
                      <Button onClickHandler={form.submit}>Reset</Button>
                    </ButtonWrapper>
                  </ResetPasswordContainer>
                  <ReturnLinkContainer>
                    <ReturnLink path="/auth/login">Return to Login</ReturnLink>
                  </ReturnLinkContainer>
                </>
              );
            }}
          />
        </>
      )}
    </>
  );
};

export default ResetPasswordPage;

export const ButtonWrapper = styled.div`
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
