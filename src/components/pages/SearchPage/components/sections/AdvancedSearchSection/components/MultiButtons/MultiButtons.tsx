import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../../../../../globalColors';

type MultiButtonsProps = {
  titles: string[];
  label?: string;
  form?: any;
  filedName?: string;
};

const MultiButtons: React.FC<MultiButtonsProps> = ({
  titles,
  label,
  form,
  filedName,
}) => {
  const [currentButton, setCurrentButton] = useState(0);

  const clickHandler = (index: number, title: string) => {
    if (!filedName) {
      return;
    }
    setCurrentButton(index);
    form.mutators.setValue(filedName, title);
  };

  return (
    <>
      {label && <MultiButtonsLabel>{label}</MultiButtonsLabel>}
      <MultiButtonsWrapper>
        {titles.map((title, index) => (
          <Button
            type="button"
            key={index}
            className={currentButton === index ? 'active' : ''}
            onClick={() => clickHandler(index, title)}>
            {title}
          </Button>
        ))}
      </MultiButtonsWrapper>
    </>
  );
};

export default MultiButtons;

export const MultiButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 6px;
  background-color: ${Colors.desert_storm};
  margin-bottom: 10px;
  padding: 2px;
`;

export const Button = styled.button`
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: ${Colors.dark_gray};
  background: ${Colors.desert_storm};
  border: 0;
  border-radius: 6px;
  width: 100%;
  height: 36px;
  text-align: center;
  padding: 9px 0;
  cursor: pointer;

  &.active {
    color: ${Colors.black};
    background: ${Colors.secondary_blue};
  }

  &:hover {
    opacity: 0.8;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

export const MultiButtonsLabel = styled.label`
  display: inline-block;
  font-size: 12px;
  line-height: 150%;
  color: ${Colors.dark_gray};
  margin-bottom: 4px;
`;
