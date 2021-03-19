import React from "react";
import { Meta } from "@storybook/react";
import { storyTemplate } from "../../../.storybook/storybookUtils";

import InputGroup from "../InputGroup";
import { EyeClose, EyeOpen } from "../..";
import { Input, InputProps } from "../Input";
import { InputAddonPrefix, InputAddonSuffix } from "../InputAddons";

export default {
  title: "Input",
  component: Input,
} as Meta;

const base = storyTemplate<InputProps>(Input, {});

export const Default = base({ placeholder: "Enter username" });

export const Disabled = base({
  disabled: true,
  placeholder: "Enter username",
});

export const Invalid = base({
  invalid: true,
  placeholder: "Enter username",
});

export const Group = () => {
  return (
    <div className="w-max">
      <InputGroup>
        <InputAddonPrefix>https://</InputAddonPrefix>
        <Input placeholder="Enter website" />
        <InputAddonSuffix>.com</InputAddonSuffix>
      </InputGroup>
    </div>
  );
};

export const PasswordInput = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <InputGroup>
      <Input type={show ? "text" : "password"} placeholder="Enter password" />
      <InputAddonSuffix
        as={"button"}
        allowPointerEvents
        className="pr-2"
        onClick={handleClick}
      >
        {show ? <EyeClose /> : <EyeOpen />}
      </InputAddonSuffix>
    </InputGroup>
  );
};

export const WithSelect = () => {
  return (
    <InputGroup>
      <InputAddonPrefix allowPointerEvents>
        <label htmlFor="country" className="sr-only">
          Country
        </label>
        <select
          id="country"
          name="country"
          className="focus:ring-indigo-500 focus:border-indigo-500 h-full px-3 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
        >
          <option>US</option>
          <option>CA</option>
          <option>EU</option>
        </select>
      </InputAddonPrefix>
      <Input placeholder="Enter country" />
    </InputGroup>
  );
};
