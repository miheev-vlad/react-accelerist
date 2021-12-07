import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../globalColors';
import { AuthenticationFormContainer } from '../containers';
import { Button, Checkbox, Input } from '../ui';
import HidePasswordIcon from '../ui/SvgComponents/HidePasswordIcon/HidePasswordIcon';
import SocialNetworkSvgIconComponent from '../ui/SvgComponents/SocialNetworkSvgIconComponent/SocialNetworkSvgIconComponent';

const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <>
      <Form
        onSubmit={(values, form) => {
          console.log(values);
          form.reset();
        }}
        render={({ handleSubmit, form }) => {
          return (
            <AuthenticationFormContainer
              title={'Welcome to Accelerist'}
              path={'login'}
              handleSubmit={handleSubmit}>
              <Field
                name="email"
                component={Input}
                label="Email"
                type="text"
                validate={v => (v ? undefined : 'Email is Required')}
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
                  <ForgotPasswordLink to="/auth/reset">
                    Forgot Password?
                  </ForgotPasswordLink>
                </div>
              </LoginFormFooterContainer>
              <Button onClickHandler={form.submit}>Login</Button>
              <SocialText>or continue with</SocialText>
              <SocialNetworkSvgIconComponent />
            </AuthenticationFormContainer>
          );
        }}
      />
    </>
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
