import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { clearLoading, RootState, setNewPassword } from '../../../redux';
import { AuthenticationPopContainer } from '../../containers';
import { Button, HidePasswordIcon, Input, ReturnLink } from '../../ui';

type SetNewPasswordValuesProps = {
  password: string;
};

const SetNewPasswordPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const passwordResetToken = searchParams.get('passwordResetToken');
  const navigate = useNavigate();

  const { isLoading, errorMessage, isResetPasswordSuccess } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    if (isResetPasswordSuccess) {
      dispatch(clearLoading());
      navigate('/auth/login');
    }
  }, [dispatch, isResetPasswordSuccess, navigate]);

  return (
    <>
      <AuthenticationPopContainer
        title={'New Password'}
        text={'Сome up with a new password'}
        errorMessage={errorMessage}
        isLoading={isLoading}>
        <Form
          onSubmit={(values: SetNewPasswordValuesProps) => {
            if (passwordResetToken) {
              dispatch(
                setNewPassword({
                  password: values.password,
                  passwordConfirmation: values.password,
                  passwordResetToken,
                }),
              );
            }
          }}
          render={({ handleSubmit }) => {
            return (
              <StyledForm onSubmit={handleSubmit}>
                <HidePasswordIcon
                  isShowPassword={isShowPassword}
                  setIsShowPassword={setIsShowPassword}
                />
                <Field
                  name="password"
                  component={Input}
                  label="Password"
                  type={isShowPassword ? 'text' : 'password'}
                  validate={v => (v ? undefined : 'Password is Required')}
                />
                <ButtonWrapper>
                  <Button buttonType="submit" disabled={isLoading}>
                    Done
                  </Button>
                </ButtonWrapper>
              </StyledForm>
            );
          }}
        />
      </AuthenticationPopContainer>
      <ContactSupportContainer>
        <ReturnLink path="/auth/register">Contact Support</ReturnLink>
      </ContactSupportContainer>
    </>
  );
};

export default SetNewPasswordPage;

export const ButtonWrapper = styled.div`
  margin-top: 40px;
`;

export const ContactSupportContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 32px;
`;

export const StyledForm = styled.form`
  width: 100%;
`;
