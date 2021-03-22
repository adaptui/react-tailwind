import React from "react";
import { Meta } from "@storybook/react";
import { storyTemplate } from "../../../.storybook/storybookUtils";

import InputGroup from "../InputGroup";
import { EyeClose, EyeOpen } from "../..";
import { Input, InputProps } from "../Input";
import {
  InputPrefix,
  InputSuffix,
  InputGroupSuffix,
  InputGroupPrefix,
} from "../InputAddons";
import { GenericAvatar, SearchIcon } from "../../icons";
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
      <InputPrefix className="pl-2">
        <GenericAvatar />
      </InputPrefix>
    </Input>
  );
};

export const Group = () => {
  return (
    <div className="w-80">
      <InputGroup>
        <InputGroupPrefix>https://</InputGroupPrefix>
        <Input placeholder="Enter website" />
        <InputGroupSuffix>.com</InputGroupSuffix>
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
      <InputGroupSuffix allowPointerEvents className="pr-2">
        <button onClick={handleClick} className="focus:outline-none">
          {show ? <EyeClose /> : <EyeOpen />}
        </button>
      </InputGroupSuffix>
    </InputGroup>
  );
};

export const WithSelect = () => {
  return (
    <InputGroup className="w-80">
      <Input placeholder="Enter country">
        <InputPrefix allowPointerEvents className="pl-2">
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
        </InputPrefix>
      </Input>
    </InputGroup>
  );
};

export const WithAvatarAndSelect = () => {
  return (
    <InputGroup className="w-80">
      <Input placeholder="Username">
        <InputPrefix allowPointerEvents className="pl-2">
          <Avatar src="https://bit.ly/ryan-florence" size="xs" />
        </InputPrefix>
        <InputSuffix allowPointerEvents as="div" className="pr-2">
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
        </InputSuffix>
      </Input>
    </InputGroup>
  );
};

export const PrefixSuffixElement = () => {
  return (
    <div className="flex flex-col gap-2">
      <InputGroup className="w-80">
        <InputGroupPrefix className="pl-2">https://</InputGroupPrefix>
        <Input placeholder="Company website" />
        <InputGroupSuffix className="pr-2">.com</InputGroupSuffix>
      </InputGroup>
      <InputGroup className="w-80">
        <InputPrefix className="pl-2">https://</InputPrefix>
        <Input placeholder="Company website" />
        <InputGroupSuffix className="pr-2">.com</InputGroupSuffix>
      </InputGroup>
      <InputGroup className="w-80">
        <InputGroupPrefix className="pl-2">https://</InputGroupPrefix>
        <Input placeholder="Company website" />
        <InputSuffix className="pr-2">.com</InputSuffix>
      </InputGroup>
      <InputGroup className="w-80">
        <InputPrefix allowPointerEvents as="div" className="pl-2">
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
        </InputPrefix>
        <Input placeholder="Company website" />
        <InputGroupSuffix className="pr-2">.com</InputGroupSuffix>
      </InputGroup>
      <InputGroup className="w-80">
        <InputGroupPrefix className="pl-2">.com</InputGroupPrefix>
        <Input placeholder="Company website" />
        <InputSuffix allowPointerEvents as="div" className="pr-2">
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
        </InputSuffix>
      </InputGroup>
    </div>
  );
};

export const Combined = () => {
  return (
    <InputGroup>
      <InputGroupPrefix>Continue</InputGroupPrefix>
      <Input>
        <InputPrefix>https://</InputPrefix>
        <InputSuffix>.com</InputSuffix>
      </Input>
      <InputGroupSuffix>Continue</InputGroupSuffix>
    </InputGroup>
  );
};

export const Example = () => {
  return (
    <InputGroup>
      <InputGroupPrefix className="pl-2">
        <SearchIcon />
      </InputGroupPrefix>
      <Input>
        <InputPrefix allowPointerEvents>
          <label htmlFor="country" className="sr-only">
            Permissions
          </label>
          <select
            id="permission"
            name="permission"
            className="h-full px-1 bg-transparent text-gray-500 text-xs outline-none"
          >
            <option>Can View</option>
            <option>Can Edit</option>
          </select>
        </InputPrefix>
        <InputSuffix allowPointerEvents className="pr-2">
          <label htmlFor="country" className="sr-only">
            Permissions
          </label>
          <select
            id="permission"
            name="permission"
            className="h-full px-1 bg-transparent text-gray-500 text-xs outline-none"
          >
            <option>Can View</option>
            <option>Can Edit</option>
          </select>
        </InputSuffix>
      </Input>
      <InputGroupSuffix>Continue</InputGroupSuffix>
    </InputGroup>
  );
};
