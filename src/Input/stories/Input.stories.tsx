import React from "react";
import { Meta } from "@storybook/react";
import { storyTemplate } from "../../../.storybook/storybookUtils";

import {
  Input,
  InputGroup,
  InputProps,
  InputPrefix,
  InputSuffix,
  InputGroupSuffix,
  InputGroupPrefix,
} from "../";
import { Avatar } from "../../avatar";
import { EyeClose, EyeOpen } from "../..";
import { GenericAvatar } from "../../icons";

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

export const PrefixSuffixStatic = () => {
  return (
    <Input placeholder="Username">
      <InputPrefix>
        <GenericAvatar />
      </InputPrefix>
      <InputSuffix>Hello world</InputSuffix>
    </Input>
  );
};

export const PrefixSuffixFocusable = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Input placeholder="Enter country">
      <label htmlFor="country" className="sr-only">
        Country
      </label>
      <InputPrefix as="select" id="country" name="country">
        <option>US</option>
        <option>CA</option>
        <option>EU</option>
      </InputPrefix>
      <InputSuffix as="button" onClick={handleClick}>
        {show ? <EyeClose /> : <EyeOpen />}
      </InputSuffix>
    </Input>
  );
};

export const GroupStatic = () => {
  return (
    <div>
      <InputGroup>
        <InputGroupPrefix>https://</InputGroupPrefix>
        <Input placeholder="Enter website" />
        <InputGroupSuffix>.com</InputGroupSuffix>
      </InputGroup>
    </div>
  );
};

export const GroupFocusable = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup>
      <label htmlFor="country" className="sr-only">
        Country
      </label>
      <InputGroupPrefix as="select" id="country" name="country">
        <option>US</option>
        <option>CA</option>
        <option>EU</option>
      </InputGroupPrefix>
      <Input type={show ? "text" : "password"} placeholder="Enter password" />
      <InputGroupSuffix as="button" onClick={handleClick}>
        {show ? <EyeClose /> : <EyeOpen />}
      </InputGroupSuffix>
    </InputGroup>
  );
};

export const WithAvatarAndSelect = () => {
  return (
    <Input placeholder="Username">
      <InputPrefix>
        <Avatar src="https://bit.ly/ryan-florence" size="xs" />
      </InputPrefix>
      <label htmlFor="country" className="sr-only">
        Permissions
      </label>
      <InputSuffix as="select" id="permission" name="permission">
        <option>Can View</option>
        <option>Can Edit</option>
      </InputSuffix>
    </Input>
  );
};

export const CombinedStatic = () => {
  return (
    <InputGroup>
      <InputGroupPrefix className="whitespace-nowrap">
        Group Prefix
      </InputGroupPrefix>
      <Input placeholder="Enter some stuff">
        <InputPrefix>Prefix</InputPrefix>
        <InputSuffix>Suffix</InputSuffix>
      </Input>
      <InputGroupSuffix className="whitespace-nowrap">
        Group Suffix
      </InputGroupSuffix>
    </InputGroup>
  );
};

export const CombinedFocusable = () => {
  return (
    <InputGroup>
      <InputGroupPrefix as="button" className="whitespace-nowrap">
        Group Prefix
      </InputGroupPrefix>
      <Input placeholder="Enter some stuff">
        <InputPrefix as="button">Prefix</InputPrefix>
        <InputSuffix as="button">Suffix</InputSuffix>
      </Input>
      <InputGroupSuffix as="button" className="whitespace-nowrap">
        Group Suffix
      </InputGroupSuffix>
    </InputGroup>
  );
};

export const InputKitchenSink = () => {
  return (
    <div className="flex flex-col items-start space-y-2">
      <Input placeholder="Username" />
      <Input placeholder="Username">
        <InputPrefix>
          <GenericAvatar />
        </InputPrefix>
      </Input>

      <Input placeholder="Username">
        <InputSuffix>
          <Avatar src="https://bit.ly/ryan-florence" size="xs" />
        </InputSuffix>
      </Input>

      <Input placeholder="Username">
        <InputPrefix>
          <GenericAvatar />
        </InputPrefix>
        <InputSuffix>
          <Avatar src="https://bit.ly/ryan-florence" size="xs" />
        </InputSuffix>
      </Input>

      <Input placeholder="Username">
        <label htmlFor="country" className="sr-only">
          Permissions
        </label>
        <InputPrefix as="select" id="permission" name="permission">
          <option>Can View</option>
          <option>Can Edit</option>
        </InputPrefix>
      </Input>

      <Input placeholder="Username">
        <label htmlFor="country" className="sr-only">
          Country
        </label>
        <InputSuffix as="select" id="country" name="country">
          <option>US</option>
          <option>CA</option>
          <option>EU</option>
        </InputSuffix>
      </Input>

      <Input placeholder="Username">
        <label htmlFor="country" className="sr-only">
          Permissions
        </label>
        <InputPrefix as="select" id="permission" name="permission">
          <option>Can View</option>
          <option>Can Edit</option>
        </InputPrefix>
        <label htmlFor="country" className="sr-only">
          Country
        </label>
        <InputSuffix as="select" id="country" name="country">
          <option>US</option>
          <option>CA</option>
          <option>EU</option>
        </InputSuffix>
      </Input>

      <Input placeholder="Username">
        <InputPrefix>
          <GenericAvatar />
        </InputPrefix>
        <label htmlFor="country" className="sr-only">
          Permissions
        </label>
        <InputSuffix as="select" id="country" name="country">
          <option>US</option>
          <option>CA</option>
          <option>EU</option>
        </InputSuffix>
      </Input>

      <Input placeholder="Username">
        <label htmlFor="country" className="sr-only">
          Permissions
        </label>
        <InputPrefix as="select" id="permission" name="permission">
          <option>Can View</option>
          <option>Can Edit</option>
        </InputPrefix>
        <InputSuffix>
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
        <InputGroupPrefix>https://</InputGroupPrefix>
        <Input placeholder="Company website" />
      </InputGroup>

      <InputGroup>
        <Input placeholder="Company website" />
        <InputGroupSuffix>.com</InputGroupSuffix>
      </InputGroup>

      <InputGroup>
        <InputGroupPrefix>https://</InputGroupPrefix>
        <Input placeholder="Company website" />
        <InputGroupSuffix>.com</InputGroupSuffix>
      </InputGroup>

      <InputGroup>
        <label htmlFor="country" className="sr-only">
          Permissions
        </label>
        <InputGroupPrefix as="select" id="permission" name="permission">
          <option>Can View</option>
          <option>Can Edit</option>
        </InputGroupPrefix>
        <Input placeholder="Company website"></Input>
      </InputGroup>

      <InputGroup>
        <Input placeholder="Company website"></Input>
        <label htmlFor="country" className="sr-only">
          Country
        </label>
        <InputGroupSuffix as="select" id="country" name="country">
          <option>US</option>
          <option>CA</option>
          <option>EU</option>
        </InputGroupSuffix>
      </InputGroup>

      <InputGroup>
        <label htmlFor="country" className="sr-only">
          Permissions
        </label>
        <InputGroupPrefix as="select" id="permission" name="permission">
          <option>Can View</option>
          <option>Can Edit</option>
        </InputGroupPrefix>
        <Input placeholder="Company website"></Input>
        <label htmlFor="country" className="sr-only">
          Country
        </label>
        <InputGroupSuffix as="select" id="country" name="country">
          <option>US</option>
          <option>CA</option>
          <option>EU</option>
        </InputGroupSuffix>
      </InputGroup>

      <InputGroup>
        <InputGroupPrefix>https://</InputGroupPrefix>
        <Input placeholder="Company website" />
        <label htmlFor="country" className="sr-only">
          Country
        </label>
        <InputGroupSuffix as="select" id="country" name="country">
          <option>US</option>
          <option>CA</option>
          <option>EU</option>
        </InputGroupSuffix>
      </InputGroup>

      <InputGroup>
        <label htmlFor="country" className="sr-only">
          Permissions
        </label>
        <InputGroupPrefix as="select" id="permission" name="permission">
          <option>Can View</option>
          <option>Can Edit</option>
        </InputGroupPrefix>
        <Input placeholder="Company website" />
        <InputGroupSuffix>.com</InputGroupSuffix>
      </InputGroup>
    </div>
  );
};

export const CombinedKitchenSink = () => {
  return (
    <div className="flex flex-col items-start space-y-2">
      <InputGroup>
        <InputGroupPrefix>https://</InputGroupPrefix>
        <Input placeholder="Company website">
          <InputPrefix>
            <GenericAvatar />
          </InputPrefix>
          <InputSuffix>
            <Avatar src="https://bit.ly/ryan-florence" size="xs" />
          </InputSuffix>
        </Input>
        <InputGroupSuffix>.com</InputGroupSuffix>
      </InputGroup>

      <InputGroup>
        <label htmlFor="country" className="sr-only">
          Permissions
        </label>
        <InputGroupPrefix as="select" id="permission" name="permission">
          <option>Can View</option>
          <option>Can Edit</option>
        </InputGroupPrefix>
        <Input placeholder="Company website">
          <label htmlFor="country" className="sr-only">
            Permissions
          </label>
          <InputPrefix as="select" id="permission" name="permission">
            <option>Can View</option>
            <option>Can Edit</option>
          </InputPrefix>
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <InputSuffix as="select" id="country" name="country">
            <option>US</option>
            <option>CA</option>
            <option>EU</option>
          </InputSuffix>
        </Input>
        <label htmlFor="country" className="sr-only">
          Country
        </label>
        <InputGroupSuffix as="select" id="country" name="country">
          <option>US</option>
          <option>CA</option>
          <option>EU</option>
        </InputGroupSuffix>
      </InputGroup>
    </div>
  );
};
