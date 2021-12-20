import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import { Colors } from '../../../../../../../../../../globalColors';
import { FormApi } from 'final-form';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

type RangeSliderProps = {
  minValue: number;
  maxValue: number;
  stepValue: number;
  valuePattern: boolean;
  defaultValues: number[];
  label: string;
  form: FormApi;
  rangeName: string;
};

const RangeSlider: React.FC<RangeSliderProps> = ({
  maxValue,
  minValue,
  stepValue,
  valuePattern,
  defaultValues,
  label,
  form,
  rangeName,
}) => {
  const changeHandler = (rangeName: string, value: number[]) => {
    form.mutators.setValue(rangeName, value);
  };

  return (
    <RangeSliderContainer>
      <RangeLabel>{label}</RangeLabel>
      <RangeContainer>
        <RangeWrapper>
          <Range
            min={minValue}
            max={maxValue}
            defaultValue={defaultValues}
            tipFormatter={value => (valuePattern ? `$ ${value}M` : value)}
            tipProps={{
              visible: true,
            }}
            step={stepValue}
            onChange={value => changeHandler(rangeName, value)}
          />
        </RangeWrapper>
      </RangeContainer>
    </RangeSliderContainer>
  );
};

export default RangeSlider;

export const RangeSliderContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;

  .rc-slider-step {
    position: absolute;
    width: 100%;
    height: 2px;
    background: transparent;
  }

  .rc-slider-rail {
    position: absolute;
    left: -34px;
    width: calc(100% + 68px);
    background-color: ${Colors.line};
    height: 2px;
  }

  .rc-slider-track {
    position: absolute;
    left: 0;
    height: 2px;
    background-color: ${Colors.blue};
  }

  .rc-slider-tooltip-arrow {
    display: none;
  }

  .rc-slider-handle {
    position: absolute;
    width: 68px;
    height: 32px;
    cursor: pointer;
    margin-top: -16px;
    border-radius: 6px;
    border: 0;
    background-color: transparent;
    z-index: 50;
  }

  .rc-slider-tooltip-inner {
    position: absolute;
    width: 69px;
    height: 33px;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    color: ${Colors.black};
    text-align: center;
    text-decoration: none;
    box-shadow: none;
    border: 1px solid ${Colors.secondary_blue};
    background-color: ${Colors.white};
    padding: 7px 0 0 0;
    top: 15px;
    left: -35px;
    z-index: 49;
  }

  .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

export const RangeLabel = styled.label`
  display: inline-block;
  font-size: 12px;
  line-height: 150%;
  color: ${Colors.dark_gray};
  margin-bottom: 20px;
`;

export const RangeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RangeWrapper = styled.div`
  width: 100%;
  padding: 0 34px;
`;
