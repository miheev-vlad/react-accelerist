import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { AuthenticationPopContainer } from '../../containers';
import { Button, HidePasswordIcon, Input, ReturnLink } from '../../ui';

const SetNewPasswordPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <>
      <AuthenticationPopContainer
        title={'New Password'}
        text={'Сome up with a new password'}>
        <Form
          onSubmit={(values, form) => {
            console.log(values);
            form.reset();
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
                  <Button buttonType="submit">Done</Button>
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
