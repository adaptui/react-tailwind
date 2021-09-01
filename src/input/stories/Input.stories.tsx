import * as React from "react";
import { Meta } from "@storybook/react";
import { storyTemplate } from "../../../.storybook/utils";

import {
  Input,
  InputGroup,
  InputProps,
  InputPrefix,
  InputSuffix,
  InputGroupSuffix,
  InputGroupPrefix,
} from "../index";
import { Avatar } from "../../avatar";
import { EyeClose, EyeOpen } from "../..";
import { GenericAvatar } from "../../icons";
import { Button } from "../../button";

export default {
  title: "Forms/Input",
  component: Input,
} as Meta;

const base = storyTemplate<InputProps>(Input, {
  isDisabled: false,
  isReadOnly: false,
  isInvalid: false,
});

export const Default = base({});

export const Placeholder = base({ placeholder: "Enter username" });

export const Disabled = base({
  isDisabled: true,
  placeholder: "Enter username",
});

export const Invalid = base({
  isInvalid: true,
  placeholder: "Enter username",
});

export const PrefixSuffixStatic = () => {
  return (
    <Input placeholder="Username">
      <InputPrefix className="px-2">
        <GenericAvatar />
      </InputPrefix>
      <InputSuffix className="px-2">
        <EyeOpen />
      </InputSuffix>
    </Input>
  );
};

export const PrefixSuffixFocusable = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Input placeholder="Enter country" type={show ? "text" : "password"}>
      <InputPrefix allowPointerEvents>
        <InputButton>
          <GenericAvatar />
        </InputButton>
      </InputPrefix>
      <InputSuffix allowPointerEvents>
        <InputButton onClick={handleClick}>
          {show ? <EyeClose /> : <EyeOpen />}
        </InputButton>
      </InputSuffix>
    </Input>
  );
};

export const GroupStatic = () => {
  return (
    <div>
      <InputGroup>
        <InputGroupPrefix className="px-2">https://</InputGroupPrefix>
        <Input placeholder="Enter website" />
        <InputGroupSuffix className="px-2">.com</InputGroupSuffix>
      </InputGroup>
    </div>
  );
};

export const GroupFocusable = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup>
      <InputGroupPrefix>
        <InputButton>
          <GenericAvatar />
        </InputButton>
      </InputGroupPrefix>
      <Input type={show ? "text" : "password"} placeholder="Enter password" />
      <InputGroupSuffix>
        <InputButton onClick={handleClick}>
          {show ? <EyeClose /> : <EyeOpen />}
        </InputButton>
      </InputGroupSuffix>
    </InputGroup>
  );
};

export const CombinedStatic = () => {
  return (
    <InputGroup>
      <InputGroupPrefix className="px-2 whitespace-nowrap">
        Group Prefix
      </InputGroupPrefix>
      <Input placeholder="Enter some stuff">
        <InputPrefix className="px-2">Prefix</InputPrefix>
        <InputSuffix className="px-2">Suffix</InputSuffix>
      </Input>
      <InputGroupSuffix className="px-2 whitespace-nowrap">
        Group Suffix
      </InputGroupSuffix>
    </InputGroup>
  );
};

export const CombinedFocusable = () => {
  return (
    <InputGroup>
      <InputGroupPrefix>
        <InputButton>Group Prefix</InputButton>
      </InputGroupPrefix>
      <Input placeholder="Enter some stuff">
        <InputPrefix allowPointerEvents>
          <InputButton>Prefix</InputButton>
        </InputPrefix>
        <InputSuffix allowPointerEvents>
          <InputButton>Suffix</InputButton>
        </InputSuffix>
      </Input>
      <InputGroupSuffix>
        <InputButton>Group Suffix</InputButton>
      </InputGroupSuffix>
    </InputGroup>
  );
};

export const WithAvatarAndSelect = () => {
  return (
    <Input placeholder="Username">
      <InputPrefix className="px-2">
        <Avatar src="https://bit.ly/ryan-florence" size="xs" />
      </InputPrefix>
      <InputSuffix className="px-2">
        <PermissionSelect />
      </InputSuffix>
    </Input>
  );
};

export const InputKitchenSink = () => {
  return (
    <div className="flex flex-col items-start space-y-2">
      <Input placeholder="Username" />
      <Input placeholder="Username">
        <InputPrefix className="px-2">
          <GenericAvatar />
        </InputPrefix>
      </Input>

      <Input placeholder="Username">
        <InputSuffix className="px-2">
          <Avatar src="https://bit.ly/ryan-florence" size="xs" />
        </InputSuffix>
      </Input>

      <Input placeholder="Username">
        <InputPrefix className="px-2">
          <GenericAvatar />
        </InputPrefix>
        <InputSuffix className="px-2">
          <Avatar src="https://bit.ly/ryan-florence" size="xs" />
        </InputSuffix>
      </Input>

      <Input placeholder="Username">
        <InputPrefix allowPointerEvents className="px-2">
          <PermissionSelect />
        </InputPrefix>
      </Input>

      <Input placeholder="Username">
        <InputSuffix allowPointerEvents className="px-2">
          <CountrySelect />
        </InputSuffix>
      </Input>

      <Input placeholder="Username">
        <InputPrefix allowPointerEvents className="px-2">
          <PermissionSelect />
        </InputPrefix>
        <InputSuffix allowPointerEvents className="px-2">
          <CountrySelect />
        </InputSuffix>
      </Input>

      <Input placeholder="Username">
        <InputPrefix className="px-2">
          <GenericAvatar />
        </InputPrefix>
        <InputSuffix allowPointerEvents className="px-2">
          <CountrySelect />
        </InputSuffix>
      </Input>

      <Input placeholder="Username">
        <InputPrefix allowPointerEvents className="px-2">
          <PermissionSelect />
        </InputPrefix>
        <InputSuffix className="px-2">
          <Avatar src="https://bit.ly/ryan-florence" size="xs" />
        </InputSuffix>
      </Input>
    </div>
  );
};

export const GroupKitchenSink = () => {
  return (
    <div className="flex flex-col items-start space-y-2">
      <InputGroup>
        <InputGroupPrefix className="px-2">https://</InputGroupPrefix>
        <Input placeholder="Company website" />
      </InputGroup>

      <InputGroup>
        <Input placeholder="Company website" />
        <InputGroupSuffix className="px-2">.com</InputGroupSuffix>
      </InputGroup>

      <InputGroup>
        <InputGroupPrefix className="px-2">https://</InputGroupPrefix>
        <Input placeholder="Company website" />
        <InputGroupSuffix className="px-2">.com</InputGroupSuffix>
      </InputGroup>

      <InputGroup>
        <InputGroupPrefix className="px-2">
          <PermissionSelect />
        </InputGroupPrefix>
        <Input placeholder="Company website"></Input>
      </InputGroup>

      <InputGroup>
        <Input placeholder="Company website"></Input>
        <InputGroupSuffix className="px-2">
          <CountrySelect />
        </InputGroupSuffix>
      </InputGroup>

      <InputGroup>
        <InputGroupPrefix className="px-2">
          <PermissionSelect />
        </InputGroupPrefix>
        <Input placeholder="Company website"></Input>
        <InputGroupSuffix className="px-2">
          <CountrySelect />
        </InputGroupSuffix>
      </InputGroup>

      <InputGroup>
        <InputGroupPrefix className="px-2">https://</InputGroupPrefix>
        <Input placeholder="Company website" />
        <InputGroupSuffix className="px-2">
          <CountrySelect />
        </InputGroupSuffix>
      </InputGroup>

      <InputGroup>
        <InputGroupPrefix className="px-2">
          <PermissionSelect />
        </InputGroupPrefix>
        <Input placeholder="Company website" />
        <InputGroupSuffix className="px-2">.com</InputGroupSuffix>
      </InputGroup>
    </div>
  );
};

export const CombinedKitchenSink = () => {
  return (
    <div className="flex flex-col items-start space-y-2">
      <InputGroup>
        <InputGroupPrefix className="px-2">https://</InputGroupPrefix>
        <Input placeholder="Company website">
          <InputPrefix className="px-2">
            <GenericAvatar />
          </InputPrefix>
          <InputSuffix className="px-2">
            <Avatar src="https://bit.ly/ryan-florence" size="xs" />
          </InputSuffix>
        </Input>
        <InputGroupSuffix className="px-2">.com</InputGroupSuffix>
      </InputGroup>

      <InputGroup>
        <InputGroupPrefix className="px-2">
          <PermissionSelect />
        </InputGroupPrefix>
        <Input placeholder="Company website">
          <InputPrefix className="px-2">
            <PermissionSelect />
          </InputPrefix>
          <InputSuffix className="px-2">
            <CountrySelect />
          </InputSuffix>
        </Input>
        <InputGroupSuffix className="px-2">
          <CountrySelect />
        </InputGroupSuffix>
      </InputGroup>
    </div>
  );
};

const InputButton: React.FC<any> = props => {
  return (
    <Button
      size="sm"
      variant="ghost"
      className="transition-none focus:outline-none hover:bg-transparent"
      {...props}
    />
  );
};

const PermissionSelect = () => {
  return (
    <>
      <label htmlFor="permission" className="sr-only">
        Permissions
      </label>
      <select
        id="permission"
        name="permission"
        className="pr-1 focus:outline-none"
      >
        <option>Can View</option>
        <option>Can Edit</option>
      </select>
    </>
  );
};

const CountrySelect = () => {
  return (
    <>
      <label htmlFor="country" className="sr-only">
        Country
      </label>
      <select id="country" name="country" className="pr-1 focus:outline-none">
        <option>US</option>
        <option>CA</option>
        <option>EU</option>
      </select>
    </>
  );
};
