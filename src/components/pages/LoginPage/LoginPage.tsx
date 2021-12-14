import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import validator from 'validator';
import { Colors } from '../../../globalColors';
import { navigationData } from '../../../navigation';
import {
  clearAuthError,
  clearSendEmail,
  login,
  RootState,
  setResetPasswordFail,
  setSignInInformation,
} from '../../../redux';
import { AuthenticationFormContainer } from '../../containers';
import {
  Button,
  Checkbox,
  HidePasswordIcon,
  Input,
  SocialNetworkSvgIconComponent,
} from '../../ui';

type LoginValuesProps = {
  email: string;
  password: string;
  remember: boolean;
};

const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dispatch = useDispatch();

  const { errorMessage, isLoading } = useSelector(
    (state: RootState) => state.auth,
  );

  const { signInEmail, signInPassword } = useSelector(
    (state: RootState) => state.user,
  );

  useEffect(() => {
    dispatch(setResetPasswordFail());
  }, [dispatch]);

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        dispatch(clearAuthError());
      }, 3000);
    }
  }, [dispatch, errorMessage]);

  const onSubmit = (values: LoginValuesProps) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      }),
    );
    if (values.remember) {
      dispatch(
        setSignInInformation({
          email: values.email,
          password: values.password,
        }),
      );
    }
  };

  return (
    <AuthenticationFormContainer
      title={'Welcome to Accelerist'}
      navigationData={navigationData}
      errorMessage={errorMessage}
      isLoading={isLoading}>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          email: signInEmail,
          password: signInPassword,
        }}
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
              <LoginFormFooterContainer>
                <CheckboxWrapper>
                  <Field name="remember" component={Checkbox} type="checkbox" />
                  <RememberLabel>Remember</RememberLabel>
                </CheckboxWrapper>
                <div>
                  <ForgotPasswordLink
                    to="/auth/reset"
                    onClick={() => {
                      dispatch(clearAuthError());
                      dispatch(setResetPasswordFail());
                      dispatch(clearSendEmail());
                    }}>
                    Forgot Password?
                  </ForgotPasswordLink>
                </div>
              </LoginFormFooterContainer>
              <Button buttonType="submit" disabled={isLoading}>
                Login
              </Button>
            </StyledForm>
          );
        }}
      />
      <SocialText>or continue with</SocialText>
      <SocialNetworkSvgIconComponent />
    </AuthenticationFormContainer>
  );
};

export default LoginPage;

export const SocialText = styled.p`
  color: ${Colors.dark_gray};
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  max-width: 360px;
  margin: 32px 0 24px 0;
`;

export const LoginFormFooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 13px 0 62px 0;
`;

export const ForgotPasswordLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.dark_gray};
  font-size: 12px;
  line-height: 150%;

  &:hover {
    color: ${Colors.black};
  }
`;

export const RememberLabel = styled.label`
  color: ${Colors.black};
  font-size: 12px;
  line-height: 150%;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledForm = styled.form`
  width: 100%;
`;
