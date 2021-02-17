import React from "react";
import { Meta } from "@storybook/react";

import { Button } from "../../button";
import {
  storyTemplate,
  createUnionControl,
} from "../../../.storybook/storybookUtils";
import {
  RadioIcon,
  RadioInput,
  RadioGroup,
  RadioLabel,
  Radio,
  RadioGroupProps,
} from "../index";
import { WheelIcon } from "../../icons";
import { InfoCircle } from "../../icon/stories/Icon.stories";

export default {
  title: "Radio",
  component: Radio,
  argTypes: {
    size: createUnionControl(["sm", "md", "lg"]),
  },
} as Meta;

const base = storyTemplate<RadioGroupProps>(
  args => {
    return (
      <RadioGroup {...args}>
        <div className="flex gap-3">
          <RadioLabel>
            <Radio value="1" />
            label 1
          </RadioLabel>

          <RadioLabel>
            <Radio value="2" />
            label 2
          </RadioLabel>
        </div>
      </RadioGroup>
    );
  },
  {
    defaultState: "2",
    size: "sm",
  },
);

export const Default = base({});

export const States = () => {
  return (
    <RadioGroup defaultState={"2"}>
      <div className="flex flex-col gap-2">
        <RadioLabel className="hover:bg-gray-100 p-2 rounded-md">
          <Radio value="1" />
          Unchecked
        </RadioLabel>
        <RadioLabel className="hover:bg-gray-100 p-2 rounded-md">
          <Radio value="2" />
          Checked
        </RadioLabel>
        <RadioLabel className="hover:bg-gray-100 p-2 rounded-md">
          <Radio value="3" disabled />
          Disabled
        </RadioLabel>
      </div>
    </RadioGroup>
  );
};

export const Controlled = () => {
  const [state, setState] = React.useState("1");
  return (
    <>
      <RadioGroup state={state} onStateChange={e => setState(e as string)}>
        <div className="flex flex-col gap-2">
          <RadioLabel className="hover:bg-gray-100 p-2 rounded-md">
            <Radio value="1" />
            Unchecked
          </RadioLabel>
          <RadioLabel className="hover:bg-gray-100 p-2 rounded-md">
            <Radio value="2" />
            Checked
          </RadioLabel>
          <RadioLabel className="hover:bg-gray-100 p-2 rounded-md">
            <Radio value="3" />
            Disabled
          </RadioLabel>
        </div>
      </RadioGroup>
      <Button onClick={() => setState("2")}>change</Button>
    </>
  );
};

export const CustomIcon = () => {
  const [state, setState] = React.useState("1");
  return (
    <>
      <RadioGroup state={state} onStateChange={e => setState(e as string)}>
        <div className="flex flex-col gap-2">
          <RadioLabel className="hover:bg-gray-100 p-2 rounded-md">
            <RadioInput value="1" />
            <RadioIcon
              value="1"
              checkedIcon={<WheelIcon />}
              uncheckedIcon={<InfoCircle />}
            />
            Two
          </RadioLabel>
          <RadioLabel className="hover:bg-gray-100 p-2 rounded-md">
            <RadioInput value="2" />
            <RadioIcon
              value="2"
              checkedIcon={<WheelIcon />}
              uncheckedIcon={<InfoCircle />}
            />
            Two
          </RadioLabel>
        </div>
      </RadioGroup>
      <Button onClick={() => setState("2")}>change</Button>
    </>
  );
};
