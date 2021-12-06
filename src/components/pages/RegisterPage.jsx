import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { Colors } from '../../globalColors';
import AuthenticationFormContainer from '../forms/AuthenticationFormContainer/AuthenticationFormContainer';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import HidePasswordIcon from '../ui/SvgComponents/HidePasswordIcon/HidePasswordIcon';
import SocialNetworkSvgIconComponent from '../ui/SvgComponents/SocialNetworkSvgIconComponent/SocialNetworkSvgIconComponent';

const required = value => {
  if (!value || !value.trim()) {
    return true;
  }

  return undefined;
};

export const RegisterPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <>
      <Form
        onSubmit={(values, form) => {
          console.log(values);
          form.reset();
        }}
        render={({ handleSubmit, form, values }) => {
          return (
            <AuthenticationFormContainer
              title={'Welcome to Accelerist'}
              path={'register'}
              handleSubmit={handleSubmit}>
              <Field
                name="email"
                component={Input}
                validate={required}
                label="Email"
                type="text"
              />
              <Field
                name="password"
                component={Input}
                validate={required}
                label="Password"
                type={isShowPassword ? 'text' : 'password'}
              />
              <HidePasswordIcon
                isShowPassword={isShowPassword}
                setIsShowPassword={setIsShowPassword}
              />
              <AgreementText>
                I agree that by clicking <BoldText>“Registration”</BoldText> I
                accept the{' '}
                <StyledLink href="https://accelerist-frontend.herokuapp.com/terms">
                  Terms Of Service
                </StyledLink>{' '}
                and{' '}
                <StyledLink href="https://accelerist-frontend.herokuapp.com/privacy-policy">
                  Privacy Policy
                </StyledLink>
              </AgreementText>
              <Button onClickHandler={form.submit}>Registration</Button>
              <SocialText>or continue with</SocialText>
              <SocialNetworkSvgIconComponent />
            </AuthenticationFormContainer>
          );
        }}
      />
    </>
  );
};

export const AgreementText = styled.p`
  color: ${Colors.dark_gray};
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  width: 360px;
  margin: 40px 0 16px 0;
`;

export const BoldText = styled.span`
  color: ${Colors.black};
  font-weight: bold;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${Colors.black};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialText = styled.p`
  color: ${Colors.dark_gray};
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  width: 360px;
  margin: 32px 0 24px 0;
`;
