import React, { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import validator from 'validator';
import { clearAuthError, sendEmail } from '../../../../../redux';
import { AuthenticationPopContainer } from '../../../../containers';
import { Button, Input, ReturnLink } from '../../../../ui';

type ResetPasswordPopUpProps = {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
  isLoading: boolean;
};

type SendEmailValuesProps = {
  email: string;
};

const ResetPasswordPopUp: React.FC<ResetPasswordPopUpProps> = ({
  setEmail,
  errorMessage,
  isLoading,
}) => {
  const dispatch = useDispatch();

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
  );
};

export default ResetPasswordPopUp;

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

export const StyledForm = styled.form`
  width: 100%;
`;
