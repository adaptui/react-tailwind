import React from "react";
import { Meta } from "@storybook/react";
import { storyTemplate } from "../../../.storybook/storybookUtils";

import InputGroup from "../InputGroup";
import { EyeClose, EyeOpen } from "../..";
import { Input, InputProps } from "../Input";
import {
  InputAddonPrefix,
  InputAddonSuffix,
  InputSuffix,
  InputPrefix,
} from "../InputAddons";
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
    <Input className="w-80" placeholder="Username">
      <InputAddonPrefix className="pl-2">
        <GenericAvatar />
      </InputAddonPrefix>
    </Input>
  );
};

export const Group = () => {
  return (
    <div className="w-80">
      <InputGroup>
        <InputPrefix>https://</InputPrefix>
        <Input placeholder="Enter website" />
        <InputSuffix>.com</InputSuffix>
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
      <InputSuffix allowPointerEvents className="pr-2">
        <button onClick={handleClick} className="focus:outline-none">
          {show ? <EyeClose /> : <EyeOpen />}
        </button>
      </InputSuffix>
    </InputGroup>
  );
};

export const WithSelect = () => {
  return (
    <InputGroup className="w-80">
      <Input placeholder="Enter country">
        <InputAddonPrefix allowPointerEvents className="pl-2">
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <select
            id="country"
            name="country"
            className="h-full px-1 text-gray-500 text-xs outline-none bg-transparent"
          >
            <option>US</option>
            <option>CA</option>
            <option>EU</option>
          </select>
        </InputAddonPrefix>
      </Input>
    </InputGroup>
  );
};

export const WithAvatarAndSelect = () => {
  return (
    <InputGroup className="w-80">
      <Input placeholder="Username">
        <InputAddonPrefix allowPointerEvents className="pl-2">
          <Avatar src="https://bit.ly/ryan-florence" size="xs" />
        </InputAddonPrefix>
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
      </Input>
    </InputGroup>
  );
};

export const PrefixSuffixElement = () => {
  return (
    <div className="flex flex-col gap-2">
      <InputGroup className="w-80">
        <InputPrefix className="pl-2">https://</InputPrefix>
        <Input placeholder="Company website" />
        <InputSuffix className="pr-2">.com</InputSuffix>
      </InputGroup>
      <InputGroup className="w-80">
        <InputAddonPrefix className="pl-2">https://</InputAddonPrefix>
        <Input placeholder="Company website" />
        <InputSuffix className="pr-2">.com</InputSuffix>
      </InputGroup>
      <InputGroup className="w-80">
        <InputPrefix className="pl-2">https://</InputPrefix>
        <Input placeholder="Company website" />
        <InputAddonSuffix className="pr-2">.com</InputAddonSuffix>
      </InputGroup>
      <InputGroup className="w-80">
        <InputAddonPrefix allowPointerEvents as="div" className="pl-2">
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
        </InputAddonPrefix>
        <Input placeholder="Company website" />
        <InputSuffix className="pr-2">.com</InputSuffix>
      </InputGroup>
      <InputGroup className="w-80">
        <InputPrefix className="pl-2">.com</InputPrefix>
        <Input placeholder="Company website" />
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
    </div>
  );
};

export const Combined = () => {
  return (
    <InputGroup>
      <InputPrefix>Continue</InputPrefix>
      <Input>
        <InputAddonPrefix>https://</InputAddonPrefix>
        <InputAddonSuffix>.com</InputAddonSuffix>
      </Input>
      <InputSuffix>Continue</InputSuffix>
    </InputGroup>
  );
};
