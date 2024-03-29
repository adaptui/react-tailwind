import * as React from "react";

import { Radio, RadioGroup, RadioGroupProps } from "../../index";

export const RadioGroupDescription: React.FC<RadioGroupProps> = props => {
  return (
    <RadioGroup aria-label="fruits" className="w-80" {...props}>
      <Radio
        inputValue="apple"
        label="Apple"
        description="Apple is a sweet and delicious fruit that is very healthy."
      />
      <Radio
        inputValue="orange"
        label="Orange"
        description="Orange is a sour fruit that is round in shape and is orange colored."
      />
      <Radio
        inputValue="watermelon"
        label="Watermelon"
        description="Watermelon is a large fruit spherical in shape. It grows during the season of summer. Watermelon is very rich in various vitamins and minerals"
      />
    </RadioGroup>
  );
};

export default RadioGroupDescription;
