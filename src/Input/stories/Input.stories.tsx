import React from "react";
import { Meta } from "@storybook/react";
import { storyTemplate } from "../../../.storybook/storybookUtils";

import InputGroup from "../InputGroup";
import { EyeClose, EyeOpen } from "../..";
import { Input, InputProps } from "../Input";
import { InputAddonPrefix, InputAddonSuffix } from "../InputAddons";
import { GenericAvatar } from "../../icons";
import { Avatar } from "../../avatar";

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

export const PrefixAddonIcon = () => {
  return (
    <InputGroup className="w-80">
      <InputAddonPrefix className="pl-2">
        <GenericAvatar />
      </InputAddonPrefix>
      <Input placeholder="Enter website" />
    </InputGroup>
  );
};

export const PrefixAddonWithSelect = () => {
  return (
    <InputGroup className="w-80">
      <InputAddonPrefix className="pl-2">
        <GenericAvatar />
      </InputAddonPrefix>
      <Input placeholder="Enter website" />
    </InputGroup>
  );
};

export const Group = () => {
  return (
    <div className="w-80">
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
    <InputGroup className="w-80">
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
    <InputGroup className="w-80">
      <InputAddonPrefix allowPointerEvents>
        <label htmlFor="country" className="sr-only">
          Country
        </label>
        <select
          id="country"
          name="country"
          className="h-full px-2 bg-transparent text-gray-500 rounded-md border-transparent border focus:outline-none focus:text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          <option className="text-sm">US</option>
          <option className="text-sm">CA</option>
          <option className="text-sm">EU</option>
        </select>
      </InputAddonPrefix>
      <Input placeholder="Enter country" />
    </InputGroup>
  );
};

export const WithAvatarAndSelect = () => {
  return (
    <InputGroup className="w-80">
      <InputAddonPrefix allowPointerEvents className="pl-2">
        <Avatar src="https://bit.ly/ryan-florence" size="xs" />
      </InputAddonPrefix>
      <Input placeholder="Username" />
      <InputAddonSuffix
        allowPointerEvents
        as="div"
        className="rounded-md pr-2 focus-within:text-gray-800 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
      >
        <label htmlFor="country" className="sr-only">
          Permissions
        </label>
        <select
          id="country"
          name="country"
          className="h-full bg-transparent text-gray-500 focus:outline-none"
        >
          <option className="text-sm">Can View</option>
          <option className="text-sm">Can Edit</option>
        </select>
      </InputAddonSuffix>
    </InputGroup>
  );
};
