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
      <InputAddonPrefix allowPointerEvents className="pl-2">
        <label htmlFor="country" className="sr-only">
          Country
        </label>
        <select
          id="country"
          name="country"
          className="h-full px-1 text-gray-500 text-xs outline-none"
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

export const WithAvatarAndSelect = () => {
  return (
    <InputGroup className="w-80">
      <InputAddonPrefix allowPointerEvents className="pl-2">
        <Avatar src="https://bit.ly/ryan-florence" size="xs" />
      </InputAddonPrefix>
      <Input placeholder="Username" />
      <InputAddonSuffix allowPointerEvents as="div" className="pr-2">
        <label htmlFor="country" className="sr-only">
          Permissions
        </label>
        <select
          id="permission"
          name="permission"
          className="h-full px-1 text-gray-500 text-xs outline-none"
        >
          <option>Can View</option>
          <option>Can Edit</option>
        </select>
      </InputAddonSuffix>
    </InputGroup>
  );
};
