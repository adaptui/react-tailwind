import * as React from "react";

import { Radio, RadioGroup, RadioGroupProps } from "../../index";

export const RadioGroupDisabled: React.FC<RadioGroupProps> = props => {
  return (
    <RadioGroup aria-label="fruits" {...props}>
      <Radio inputValue="apple" label="Apple" />
      <Radio inputValue="orange" label="Orange" disabled />
      <Radio inputValue="watermelon" label="Watermelon" />
      <Radio inputValue="grapes" label="Grapes" />
      <Radio inputValue="banana" label="Banana" />
      <Radio inputValue="blueberry" label="Blueberry" disabled />
      <Radio inputValue="sapota" label="Sapota" />
      <Radio inputValue="papaya" label="Papaya" />
      <Radio inputValue="avocado" label="Avocado" />
      <Radio inputValue="strawberry" label="Strawberry" disabled />
      <Radio inputValue="cherry" label="Cherry" />
      <Radio inputValue="fig" label="Fig" />
      <Radio inputValue="guava" label="Guava" disabled />
      <Radio inputValue="mango" label="Mango" />
    </RadioGroup>
  );
};

export default RadioGroupDisabled;
