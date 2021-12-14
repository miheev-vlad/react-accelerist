import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../redux';
import { EmailResendPopUp, ResetPasswordPopUp } from './components';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');

  const { errorMessage, isLoading, isEmailSendSuccess } = useSelector(
    (state: RootState) => state.auth,
  );

  return (
    <>
      {isEmailSendSuccess ? (
        <EmailResendPopUp email={email} errorMessage={errorMessage} />
      ) : (
        <ResetPasswordPopUp
          setEmail={setEmail}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
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
