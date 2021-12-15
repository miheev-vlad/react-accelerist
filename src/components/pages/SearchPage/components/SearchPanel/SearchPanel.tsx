import React from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { Colors } from '../../../../../globalColors';
import { Input } from './components';

type SearchPanelProps = {
  setFilterName: React.Dispatch<React.SetStateAction<string>>;
};

type SearchValuesProps = {
  company: string;
};

const SearchPanel: React.FC<SearchPanelProps> = ({ setFilterName }) => {
  const onSubmit = (values: SearchValuesProps) => {
    setFilterName(values.company);
  };

  return (
    <PanelContainer>
      <PanelWrapper>
        <PanelTextWrapper>Search</PanelTextWrapper>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form }) => {
            return (
              <StyledForm onSubmit={handleSubmit}>
                <Field name="company">
                  {({ input, meta }) => (
                    <Input
                      type="text"
                      input={input}
                      meta={meta}
                      {...input}
                      form={form}
                    />
                  )}
                </Field>
              </StyledForm>
            );
          }}
        />
      </PanelWrapper>
    </PanelContainer>
  );
};

export default SearchPanel;

export const PanelContainer = styled.header`
  margin-top: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  background-color: ${Colors.white};
  font-size: 12px;
  line-height: 150%;

  @media screen and (max-width: 750px) {
    background-color: ${Colors.snow_drift};
    padding-top: 16px;
  }
`;

export const PanelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 60px;

  @media screen and (max-width: 1020px) {
    padding: 0 32px;
  }

  @media screen and (max-width: 376px) {
    padding: 0 16px;
  }
`;

export const PanelTextWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 82px;
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;

  @media screen and (max-width: 1044px) {
    margin-right: 60px;
  }

  @media screen and (max-width: 1028px) {
    margin-right: 32px;
    font-size: 28px;
  }

  @media screen and (max-width: 860px) {
    font-size: 28px;
  }

  @media screen and (max-width: 750px) {
    font-size: 16px;
    line-height: 145%;
    margin-bottom: 8px;
  }
`;

export const SearchInputWrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  margin-right: 28px;
`;

export const StyledForm = styled.form`
  @media screen and (max-width: 787px) {
    width: 81%;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
