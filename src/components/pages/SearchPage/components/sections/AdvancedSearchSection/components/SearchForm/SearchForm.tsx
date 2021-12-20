import React from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Colors } from '../../../../../../../../globalColors';
import {
  cleaningQueryParams,
  QueryParamsProps,
  setCurrentPage,
  setQueryParams,
  toggleShowAdvancedSearch,
} from '../../../../../../../../redux/ducks';
import { Button, Checkbox, Input } from '../../../../../../../ui';
import { mockSelectData } from '../../mockData';
import usaStates from '../../mockData/usaSates';
import { RangeSlider, SelectInput } from './components';
import { MultiButtons } from '../MultiButtons';

export type SearchValuesProps = {
  industry?: string;
  industries?: string[];
  location?: string;
  locations?: string[];
  scope?: string;
  goals?: string;
  focus?: string;
  contributions?: string;
  revenue?: number[];
  gender?: string;
  relations?: string;
  income?: string;
  ethnicity?: string;
  age?: number[];
};

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();

  const cancelButtonClickHandler = () => {
    dispatch(toggleShowAdvancedSearch());
    dispatch(cleaningQueryParams());
  };

  const onSubmit = (values: SearchValuesProps) => {
    const searchParams: QueryParamsProps = {
      location: values.locations ? values.locations : [],
      revenueMax: values.revenue
        ? (values.revenue[1] * 1000000).toString()
        : '',
      revenueMin: values.revenue
        ? (values.revenue[0] * 1000000).toString()
        : '',
      industry: values.industries ? values.industries : [],
    };
    dispatch(setQueryParams({ queryParams: searchParams }));
    dispatch(toggleShowAdvancedSearch());
    dispatch(setCurrentPage({ currentPage: '1' }));
  };

  return (
    <Form
      onSubmit={onSubmit}
      mutators={{
        setValue: (args, state, utils) => {
          utils.changeValue(state, args[0], () => args[1]);
        },
      }}
      initialValues={{
        gender: 'Male',
        relations: 'Single',
        revenue: [5.5, 50],
        age: [31, 35],
        industry: '',
        location: '',
      }}
      render={({ handleSubmit, form, values }) => {
        return (
          <StyledForm onSubmit={handleSubmit}>
            <StyledText>Company</StyledText>
            <IndustryAndLocationContainer>
              <IndustryInputContainer>
                <IndustryInputWrapper>
                  <Field name="industry">
                    {({ input, meta }) => (
                      <Input
                        type="text"
                        input={input}
                        meta={meta}
                        {...input}
                        label="Industry"
                        placeholder="Search"
                      />
                    )}
                  </Field>
                </IndustryInputWrapper>
                <MainCheckboxWrapper>
                  {mockSelectData
                    .filter(industryItem =>
                      industryItem
                        .toLowerCase()
                        .includes(values.industry!.trim().toLocaleLowerCase()),
                    )
                    .map((industryItem, index) => (
                      <CheckboxItemWrapper key={index}>
                        <CheckboxWrapper>
                          <Field
                            name="industries"
                            component={Checkbox}
                            type="checkbox"
                            value={industryItem}
                          />
                          <CheckboxValueText>{industryItem}</CheckboxValueText>
                        </CheckboxWrapper>
                      </CheckboxItemWrapper>
                    ))}
                </MainCheckboxWrapper>
              </IndustryInputContainer>
              <LocationInputContainer>
                <LocationInputWrapper>
                  <Field name="location">
                    {({ input, meta }) => (
                      <Input
                        type="text"
                        input={input}
                        meta={meta}
                        {...input}
                        label="Geographic Location"
                        placeholder="Search"
                      />
                    )}
                  </Field>
                </LocationInputWrapper>
                <MainCheckboxWrapper>
                  {usaStates
                    .filter(state =>
                      state.name
                        .toLowerCase()
                        .includes(values.location!.trim().toLocaleLowerCase()),
                    )
                    .map((state, index) => (
                      <CheckboxItemWrapper key={index}>
                        <CheckboxWrapper>
                          <Field
                            name="locations"
                            component={Checkbox}
                            type="checkbox"
                            value={state.name}
                          />
                          <CheckboxValueText>{state.name}</CheckboxValueText>
                        </CheckboxWrapper>
                      </CheckboxItemWrapper>
                    ))}
                </MainCheckboxWrapper>
              </LocationInputContainer>
            </IndustryAndLocationContainer>
            <SelectorsGroupContainer>
              <DoubleUpSelectorsContainer>
                <SelectWrapper>
                  <Field name="scope">
                    {({ input, meta }) => (
                      <SelectInput
                        input={input}
                        meta={meta}
                        {...input}
                        label="Scope"
                        options={['', 'Local1', 'Local2', 'Local3', 'Local4']}
                      />
                    )}
                  </Field>
                </SelectWrapper>
                <SelectWrapper>
                  <Field name="goals">
                    {({ input, meta }) => (
                      <SelectInput
                        input={input}
                        meta={meta}
                        {...input}
                        label="SDG Goals"
                        options={[
                          '',
                          'No poverty1',
                          'No poverty2',
                          'No poverty3',
                          'No poverty4',
                        ]}
                      />
                    )}
                  </Field>
                </SelectWrapper>
              </DoubleUpSelectorsContainer>
              <DoubleDownSelectorsContainer>
                <SelectWrapper>
                  <Field name="focus">
                    {({ input, meta }) => (
                      <SelectInput
                        input={input}
                        meta={meta}
                        {...input}
                        label="CDR Focus"
                        options={[
                          '',
                          'Health1',
                          'Health2',
                          'Health3',
                          'Health4',
                        ]}
                      />
                    )}
                  </Field>
                </SelectWrapper>
                <SelectWrapper>
                  <Field name="contributions">
                    {({ input, meta }) => (
                      <SelectInput
                        input={input}
                        meta={meta}
                        {...input}
                        label="Total Annual Contributions"
                        options={[
                          '',
                          'Contributions1',
                          'Contributions2',
                          'Contributions3',
                          'Contributions4',
                        ]}
                      />
                    )}
                  </Field>
                </SelectWrapper>
              </DoubleDownSelectorsContainer>
            </SelectorsGroupContainer>
            <MultiRangeSliderContainer>
              <MultiRangeSliderWrapper>
                <RangeSlider
                  maxValue={100}
                  minValue={0}
                  stepValue={0.1}
                  defaultValues={[5.5, 50]}
                  valuePattern={true}
                  label={'Revenue'}
                  form={form}
                  rangeName="revenue"
                />
              </MultiRangeSliderWrapper>
              <MultiRangeSliderRightWrapper></MultiRangeSliderRightWrapper>
            </MultiRangeSliderContainer>
            <StyledText>Customer Demographics</StyledText>
            <MultiButtonsGroupContainer>
              <MultiButtonsContainer>
                <MultiButtonsWrapper>
                  <MultiButtons
                    titles={['Male', 'Female', 'Both']}
                    label="Gender"
                    form={form}
                    filedName="gender"
                  />
                </MultiButtonsWrapper>
                <MultiButtonsWrapper>
                  <MultiButtons
                    titles={['Single', 'Married']}
                    label="Relations"
                    form={form}
                    filedName="relations"
                  />
                </MultiButtonsWrapper>
              </MultiButtonsContainer>
            </MultiButtonsGroupContainer>
            <SelectorsGroupContainer>
              <DoubleDownSelectorsContainer>
                <SelectWrapper>
                  <Field name="income">
                    {({ input, meta }) => (
                      <SelectInput
                        input={input}
                        meta={meta}
                        {...input}
                        label="Household Income"
                        options={[
                          '',
                          'Higher1',
                          'Higher2',
                          'Higher3',
                          'Higher4',
                        ]}
                      />
                    )}
                  </Field>
                </SelectWrapper>
                <SelectWrapper>
                  <Field name="ethnicity">
                    {({ input, meta }) => (
                      <SelectInput
                        input={input}
                        meta={meta}
                        {...input}
                        label="Ethnicity"
                        options={[
                          '',
                          'Ethnicity1',
                          'Ethnicity2',
                          'Ethnicity3',
                          'Ethnicity4',
                        ]}
                      />
                    )}
                  </Field>
                </SelectWrapper>
              </DoubleDownSelectorsContainer>
            </SelectorsGroupContainer>
            <MultiRangeSliderContainer>
              <MultiRangeSliderWrapper>
                <RangeSlider
                  maxValue={100}
                  minValue={18}
                  stepValue={1}
                  defaultValues={[23, 64]}
                  valuePattern={false}
                  label={'Age'}
                  form={form}
                  rangeName="age"
                />
              </MultiRangeSliderWrapper>
              <MultiRangeSliderRightWrapper></MultiRangeSliderRightWrapper>
            </MultiRangeSliderContainer>
            <SubmitButtonsGroup>
              <SubmitButtonsWrapper>
                <Button
                  buttonType="button"
                  isCancel={true}
                  onClickHandler={cancelButtonClickHandler}>
                  Cancel
                </Button>
                <Button buttonType="submit">Search</Button>
              </SubmitButtonsWrapper>
              <SubmitButtonsWrapperRight></SubmitButtonsWrapperRight>
            </SubmitButtonsGroup>
          </StyledForm>
        );
      }}
    />
  );
};

export default SearchForm;

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: ${Colors.black};
  margin-bottom: 16px;
`;

export const IndustryAndLocationContainer = styled.div`
  margin-top: -26px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 26px;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LocationInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const IndustryInputContainer = styled.div`
  width: 100%;
  margin-right: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LocationInputWrapper = styled.div`
  width: 100%;
  margin-bottom: 18px;
`;

export const IndustryInputWrapper = styled.div`
  width: 100%;
  margin-bottom: 18px;
`;

export const MainCheckboxWrapper = styled.div`
  width: 100%;
  height: 120px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    height: 67px;
    background-color: ${Colors.cloud};
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxValueText = styled.label`
  color: ${Colors.black};
  font-size: 12px;
  line-height: 150%;
`;

export const CheckboxItemWrapper = styled.div`
  margin-bottom: 19px;
`;

export const SelectorsGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 0;
`;

export const DoubleUpSelectorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  gap: 26px;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

export const DoubleDownSelectorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  gap: 26px;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

export const SelectWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const MultiButtonsGroupContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const MultiButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 26px;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

export const MultiButtonsWrapper = styled.div`
  width: 100%;
`;

export const SubmitButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 26px;
`;

export const SubmitButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 6px;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const SubmitButtonsWrapperRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 6px;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const MultiRangeSliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 26px;
  width: 100%;
`;

export const MultiRangeSliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const MultiRangeSliderRightWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;
