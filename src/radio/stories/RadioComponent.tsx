import * as React from "react";
import { Disclosure, DisclosureContent, useDisclosureState } from "reakit";

import { Radio, RadioGroup, RadioGroupProps } from "../index";

export const RadioComponent: React.FC<RadioGroupProps> = props => {
  return (
    <RadioGroup aria-label="fruits" className="w-40" {...props}>
      <Radio value="apple" label="Apple" />
      <Radio value="orange" label="Orange" />
      <Radio value="watermelon" label="Watermelon" />
    </RadioGroup>
  );
};

export const RadioDescriptionComponent: React.FC<RadioGroupProps> = props => {
  return (
    <RadioGroup aria-label="fruits" className="w-[70rem]" {...props}>
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
    <RadioGroup aria-label="fruits" className="w-[70rem]" {...props}>
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
  return (
    <RadioGroup
      aria-label="fruits"
      className="w-96"
      defaultState={"apple"}
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

export const RadioShowMoreComponent: React.FC<RadioGroupProps> = props => {
  const disclosure = useDisclosureState();
  console.log("%cdisclosure", "color: #99614d", disclosure);

  return (
    <RadioGroup aria-label="fruits" className="w-40" {...props}>
      <Radio value="apple" label="Apple" />
      <Radio value="orange" label="Orange" />
      <Radio value="watermelon" label="Watermelon" />
      <Radio value="grapes" label="Grapes" />
      <Radio value="banana" label="Banana" />
      <Radio value="blueberry" label="blueberry" />
      <DisclosureContent className="flex flex-col space-y-4" {...disclosure}>
        <Radio value="sapota" label="Sapota" />
        <Radio value="papaya" label="Papaya" />
        <Radio value="avocado" label="Avocado" />
        <Radio value="strawberry" label="Strawberry" />
        <Radio value="cherry" label="Cherry" />
        <Radio value="fig" label="Fig" />
        <Radio value="guava" label="Guava" />
        <Radio value="mango" label="Mango" />
      </DisclosureContent>
      <Disclosure {...disclosure}> Show more</Disclosure>
    </RadioGroup>
  );
};
