import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { ResetPasswordContainer } from '../../containers';
import { Button, HidePasswordIcon, Input, ReturnLink } from '../../ui';

const SetNewPasswordPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <Form
      onSubmit={(values, form) => {
        console.log(values);
        form.reset();
      }}
      render={({ handleSubmit, form }) => {
        return (
          <>
            <ResetPasswordContainer
              title={'New Password'}
              handleSubmit={handleSubmit}
              text={'Сome up with a new password'}>
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
                <Button onClickHandler={form.submit}>Done</Button>
              </ButtonWrapper>
            </ResetPasswordContainer>
            <ContactSupportContainer>
              <ReturnLink path="/auth/register">Contact Support</ReturnLink>
            </ContactSupportContainer>
          </>
        );
      }}
    />
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
