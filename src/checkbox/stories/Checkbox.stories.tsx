import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Checkbox, CheckboxProps } from "../index";
import { CheckboxInput } from "../Checkbox";
import { CheckIcon } from "../../icons";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;

const Base: Story<CheckboxProps> = args => {
  const [checked, setChecked] = React.useState(false);
  const toggle = () => setChecked(!checked);
  return (
    <Checkbox {...args}>
      <CheckboxInput checked={checked} onChange={toggle} />
      <div
        className={`inline-flex items-center justify-center flex-shrink-0 w-4 h-4 align-top transition-all border-2 border-solid rounded select-none border-gray-200
         ${checked ? "text-white bg-gray-800 border-gray-800" : " "}`}
      >
        {checked ? (
          <div className="flex items-center justify-center h-full text-xs transform-none">
            <CheckIcon />
          </div>
        ) : null}
      </div>
      <div className="ml-2 text-base select-none">Checkbox</div>
    </Checkbox>
  );
};

export const Default = Base.bind({});
Default.args = {};
