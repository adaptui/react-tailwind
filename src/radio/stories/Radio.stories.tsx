import React from "react";
import { Meta } from "@storybook/react";

import { Button } from "../../button";
import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { RadioGroup, RadioLabel, Radio, RadioGroupProps } from "../index";

export default {
  title: "Radio",
  component: Radio,
  argTypes: createControls("radio", { unions: ["size"] }),
} as Meta;

const base = storyTemplate<RadioGroupProps>(
  (args: any) => {
    return (
      <RadioGroup size={args.size}>
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
    size: "sm",
  },
);

export const Default = base({});

export const States = () => {
  return (
    <RadioGroup defaultState={"2"} size="sm">
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
