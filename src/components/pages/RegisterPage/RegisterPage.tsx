import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import validator from 'validator';
import { Colors } from '../../../globalColors';
import { navigationData } from '../../../navigation';
import { clearAuthError, register, RootState } from '../../../redux';
import { AuthenticationFormContainer } from '../../containers';
import {
  Button,
  HidePasswordIcon,
  Input,
  SocialNetworkSvgIconComponent,
} from '../../ui';

type RegisterValuesProps = {
  email: string;
  password: string;
};

const RegisterPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dispatch = useDispatch();

  const { errorMessage, isLoading } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        dispatch(clearAuthError());
      }, 3000);
    }
  }, [dispatch, errorMessage]);

  return (
    <AuthenticationFormContainer
      title={'Welcome to Accelerist'}
      navigationData={navigationData}
      errorMessage={errorMessage}
      isLoading={isLoading}>
      <Form
        onSubmit={(values: RegisterValuesProps) => {
          dispatch(
            register({
              email: values.email,
              password: values.password,
            }),
          );
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
              <Button buttonType="submit" disabled={isLoading}>
                Registration
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
  font-weight: 500;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${Colors.black};
  font-weight: 400;

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

export const StyledForm = styled.form`
  width: 100%;
`;
