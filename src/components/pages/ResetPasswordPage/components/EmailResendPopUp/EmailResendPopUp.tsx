import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import { clearAuthError, sendEmail } from '../../../../../redux';
import { AuthenticationPopContainer } from '../../../../containers';
import { Button, ReturnLink } from '../../../../ui';

type EmailResendPopUpProps = {
  email: string;
  errorMessage: string;
};

const EmailResendPopUp: React.FC<EmailResendPopUpProps> = ({
  email,
  errorMessage,
}) => {
  const dispatch = useDispatch();
  const [errorText, setErrorText] = useState('');
  const [emailSendProcessing, setEmailSendProcessing] = useState(false);

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

  const onClickHandler = () => {
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
  };

  return (
    <>
      <AuthenticationPopContainer
        title={'Password Reset'}
        text={
          'A link was sent to your email to confirm password reset and create a new one'
        }
        errorMessage={errorText}>
        <ButtonWrapper>
          <Button
            onClickHandler={onClickHandler}
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
  );
};

export default EmailResendPopUp;

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
