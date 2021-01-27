import React from "react";
import { Meta } from "@storybook/react";
import { Radio, RadioGroup, RadioLabel } from "../Radio";
import { Button } from "../../";

export default {
  title: "Radio",
  component: Radio,
} as Meta;

export const Default = () => {
  return (
    <RadioGroup>
      <div className="flex gap-5">
        <RadioLabel>
          <Radio value="1" /> One
        </RadioLabel>
        <RadioLabel>
          <Radio value="2" /> Two
        </RadioLabel>
        <RadioLabel>
          <Radio value="3" /> Three
        </RadioLabel>
        <RadioLabel>
          <Radio value="4" disabled />
          Disabled
        </RadioLabel>
      </div>
    </RadioGroup>
  );
};

export const Controlled = () => {
  const [state, setState] = React.useState("3");

  console.log(state);
  return (
    <>
      <RadioGroup
        state={state}
        onStateChange={e => {
          setState(e as string);
        }}
      >
        <div className="flex gap-5">
          <RadioLabel>
            <Radio value="1" /> One
          </RadioLabel>
          <RadioLabel>
            <Radio value="2" /> Two
          </RadioLabel>
          <RadioLabel>
            <Radio value="3" /> Three
          </RadioLabel>
          <RadioLabel>
            <Radio value="4" disabled />
            Disabled
          </RadioLabel>
        </div>
      </RadioGroup>
      <Button onClick={() => setState("2")}>change</Button>
    </>
  );
};

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
