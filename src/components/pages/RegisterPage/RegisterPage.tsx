import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { Colors } from '../../../globalColors';
import { AuthenticationFormContainer } from '../../containers';
import {
  Button,
  HidePasswordIcon,
  Input,
  SocialNetworkSvgIconComponent,
} from '../../ui';

const RegisterPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <Form
      onSubmit={(values, form) => {
        console.log(values);
        form.reset();
      }}
      render={({ handleSubmit, form }) => {
        return (
          <AuthenticationFormContainer
            title={'Welcome to Accelerist'}
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
            <AgreementText>
              I agree that by clicking <BoldText>“Registration”</BoldText> I
              accept the{' '}
              <StyledLink
                href="https://accelerist-frontend.herokuapp.com/terms"
                target="blank">
                Terms Of Service
              </StyledLink>{' '}
              and{' '}
              <StyledLink
                href="https://accelerist-frontend.herokuapp.com/privacy-policy"
                target="blank">
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
  );
};

export default RegisterPage;

export const AgreementText = styled.p`
  color: ${Colors.dark_gray};
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  max-width: 360px;
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
  max-width: 360px;
  margin: 32px 0 24px 0;
`;
