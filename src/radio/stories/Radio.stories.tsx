import React from "react";
import { Meta } from "@storybook/react";

import {
  Radio,
  RadioIcon,
  RadioInput,
  RadioGroup,
  RadioLabel,
  RadioProps,
  RadioGroupProps,
} from "../index";
import { Box } from "../../box";
import { Button } from "../../button";
import {
  storyTemplate,
  createUnionControl,
} from "../../../.storybook/storybookUtils";
import { CheckCircleIcon } from "../../icons";

export default {
  title: "Forms/Radio",
  component: Radio,
  argTypes: {
    size: createUnionControl(["sm", "md", "lg"]),
  },
} as Meta;

const BaseRadio: React.FC<RadioProps> = props => {
  return (
    <Radio
      className="px-2 py-1 rounded hover:bg-gray-100 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-600"
      {...props}
    />
  );
};

const CompleteRadio: React.FC<RadioGroupProps> = props => {
  return (
    <RadioGroup
      aria-label="fruits"
      className="flex flex-col space-y-2 w-36"
      loop
      {...props}
    >
      <BaseRadio value="apple">apple</BaseRadio>
      <BaseRadio value="orange">Orange</BaseRadio>
      <BaseRadio value="watermelon">Watermelon</BaseRadio>
      <BaseRadio value="grapes" disabled>
        Grapes
      </BaseRadio>
    </RadioGroup>
  );
};

const base = storyTemplate<RadioGroupProps>(CompleteRadio, { size: "md" });

export const Base = base({});
export const DefaultState = base({ defaultState: "orange" });

export const Controlled = () => {
  const [state, setState] = React.useState("watermelon");
  return (
    <Box className="space-y-2">
      <CompleteRadio state={state} onStateChange={e => setState(e as string)} />
      <Button className="bg-orange-500" onClick={() => setState("orange")}>
        Change to Orange
      </Button>
    </Box>
  );
};

const CustomRadio: React.FC<RadioProps> = props => {
  return (
    <Radio {...props}>
      <RadioLabel className="px-2 py-1 rounded hover:bg-gray-100 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-600">
        <RadioInput />
        <RadioIcon checkedIcon={<CheckCircleIcon />} />
        {props.children}
      </RadioLabel>
    </Radio>
  );
};

const CompleteCustomRadio: React.FC<RadioGroupProps> = props => {
  return (
    <RadioGroup
      aria-label="fruits"
      className="flex flex-col space-y-2 w-36"
      {...props}
    >
      <CustomRadio value="apple">apple</CustomRadio>
      <CustomRadio value="orange">Orange</CustomRadio>
      <CustomRadio value="watermelon">Watermelon</CustomRadio>
      <CustomRadio value="grapes" disabled>
        Grapes
      </CustomRadio>
    </RadioGroup>
  );
};

export const Custom = storyTemplate<RadioGroupProps>(CompleteCustomRadio, {
  size: "md",
})({});
