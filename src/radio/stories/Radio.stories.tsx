import React from "react";
import { Meta } from "@storybook/react";
import { Radio, RadioGroup } from "../Radio";
import { Button } from "../../";

export default {
  title: "Radio",
  component: Radio,
} as Meta;

export const Default = () => {
  return (
    <RadioGroup>
      <div className="flex gap-5">
        <Radio value="1">One</Radio>
        <Radio value="2">Two</Radio>
        <Radio value="3">Three</Radio>
        <Radio value="4" disabled>
          Disabled
        </Radio>
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
          <Radio value="1">One</Radio>
          <Radio value="2">Two</Radio>
          <Radio value="3">Three</Radio>
          <Radio value="4" disabled>
            Disabled
          </Radio>
        </div>
      </RadioGroup>
      <Button onClick={() => setState("2")}>change</Button>
    </>
  );
};

export const States = () => {
  return (
    <RadioGroup state={"2"}>
      <div className="flex flex-col gap-2">
        <Radio value="1" className="hover:bg-gray-100 p-2 rounded-md">
          Unchecked
        </Radio>
        <Radio value="2" className="hover:bg-gray-100 p-2 rounded-md">
          Checked
        </Radio>
        <Radio value="3" disabled className="hover:bg-gray-100 p-2 rounded-md">
          Disabled
        </Radio>
      </div>
    </RadioGroup>
  );
};
