import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import validator from 'validator';
import { clearAuthError, RootState, sendEmail } from '../../../redux';
import { AuthenticationPopContainer } from '../../containers';
import { Button, Input, ReturnLink } from '../../ui';

type SendEmailValuesProps = {
  email: string;
};

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [errorText, setErrorText] = useState('');
  const [emailSendProcessing, setEmailSendProcessing] = useState(false);

  const { errorMessage, isLoading, isEmailSendSuccess } = useSelector(
    (state: RootState) => state.auth,
  );

  const renderer = ({
    minutes,
    seconds,
  }: {
    minutes: number;
    seconds: number;
  }) => {
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  };

  const handleSendEmailProcessing = () => {
    setEmailSendProcessing(true);
    setTimeout(() => {
      setEmailSendProcessing(false);
    }, 16000);
  };

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        dispatch(clearAuthError());
      }, 3000);
    }
  }, [dispatch, errorMessage]);

  const onSubmit = (values: SendEmailValuesProps) => {
    dispatch(
      sendEmail({
        email: values.email,
      }),
    );
    setEmail(values.email);
  };

  return (
    <>
      {isEmailSendSuccess ? (
        <>
          <AuthenticationPopContainer
            title={'Password Reset'}
            text={
              'A link was sent to your email to confirm password reset and create a new one'
            }
            errorMessage={errorText}>
            <ButtonWrapper>
              <Button
                onClickHandler={() => {
                  if (email) {
                    dispatch(
                      sendEmail({
                        email,
                      }),
                    );
                    handleSendEmailProcessing();
                  } else {
                    setErrorText('Something went wrong...');
                  }
                }}
                buttonType="button"
                disabled={emailSendProcessing}>
                {emailSendProcessing ? (
                  <Countdown date={Date.now() + 15000} renderer={renderer} />
                ) : (
                  'Resend'
                )}
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
            }
            errorMessage={errorMessage}>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => {
                return (
                  <StyledForm onSubmit={handleSubmit}>
                    <Field
                      name="email"
                      component={Input}
                      label="Email"
                      type="text"
                      validate={(v: string) =>
                        !validator.isEmail(v || '') && 'Valid Email is Required'
                      }
                    />
                    <ButtonWrapper>
                      <Button buttonType="submit" disabled={isLoading}>
                        Reset
                      </Button>
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
