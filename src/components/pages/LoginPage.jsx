import React from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { Colors } from '../../globalColors';
import AuthenticationFormContainer from '../forms/AuthenticationFormContainer/AuthenticationFormContainer';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import SocialNetworkSvgIconComponent from '../ui/SvgComponents/SocialNetworkSvgIconComponent/SocialNetworkSvgIconComponent';

const required = value => {
  if (!value || !value.trim()) {
    return true;
  }

  return undefined;
};

export const LoginPage = () => {
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
                validate={required}
                label="Email"
                type="text"
              />
              <Field
                name="password"
                component={Input}
                validate={required}
                label="Password"
                type="password"
              />
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

export const SocialText = styled.p`
  color: ${Colors.dark_gray};
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  width: 360px;
  margin: 32px 0 24px 0;
`;
