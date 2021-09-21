import * as React from "react";

import { Radio, RadioGroup, RadioGroupProps, RadioGroupState } from "../index";

export const RadioComponent: React.FC<RadioGroupProps> = props => {
  return (
    <RadioGroup
      aria-label="fruits"
      className="flex flex-col w-40 space-y-4"
      {...props}
    >
      <Radio value="apple" label="Apple" />
      <Radio value="orange" label="Orange" />
      <Radio value="watermelon" label="Watermelon" />
    </RadioGroup>
  );
};

export const RadioDescriptionComponent: React.FC<RadioGroupProps> = props => {
  return (
    <RadioGroup
      aria-label="fruits"
      className="flex flex-col space-y-4 w-96"
      {...props}
    >
      <Radio
        value="apple"
        label="Apple"
        description="Apple is a sweet and delicious fruit that is very healthy."
      />
      <Radio
        value="orange"
        label="Orange"
        description="Orange is a sour fruit that is round in shape and is orange colored."
      />
      <Radio
        value="watermelon"
        label="Watermelon"
        description="Watermelon is a large fruit spherical in shape. It grows during the season of summer. Watermelon is very rich in various vitamins and minerals"
      />
    </RadioGroup>
  );
};

export const RadioDisabledComponent: React.FC<RadioGroupProps> = props => {
  return (
    <RadioGroup
      aria-label="fruits"
      className="flex flex-col space-y-4 w-96"
      {...props}
    >
      <Radio
        value="apple"
        label="Apple"
        description="Apple is a sweet and delicious fruit that is very healthy."
      />
      <Radio
        value="orange"
        label="Orange"
        description="Orange is a sour fruit that is round in shape and is orange colored."
        disabled
      />
      <Radio
        value="watermelon"
        label="Watermelon"
        description="Watermelon is a large fruit spherical in shape. It grows during the season of summer. Watermelon is very rich in various vitamins and minerals"
      />
    </RadioGroup>
  );
};

export const RadioControlledComponent: React.FC<RadioGroupProps> = props => {
  const [state, onStateChange] =
    React.useState<RadioGroupState["state"]>("apple");

  return (
    <RadioGroup
      aria-label="fruits"
      className="flex flex-col space-y-4 w-96"
      state={state}
      onStateChange={stat => console.log(stat)}
      {...props}
    >
      <Radio
        value="apple"
        label="Apple"
        description="Apple is a sweet and delicious fruit that is very healthy."
      />
      <Radio
        value="orange"
        label="Orange"
        description="Orange is a sour fruit that is round in shape and is orange colored."
      />
      <Radio
        value="watermelon"
        label="Watermelon"
        description="Watermelon is a large fruit spherical in shape. It grows during the season of summer. Watermelon is very rich in various vitamins and minerals"
      />
    </RadioGroup>
  );
};
