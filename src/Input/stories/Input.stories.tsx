import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { storyTemplate } from "../../../.storybook/storybookUtils";
import { EyeOpen, EyeClose, InfoCircleIcon, SearchIcon } from "../../icons";
import { Input, InputProps } from "../Input";

export default {
  title: "Input",
  component: Input,
} as Meta;

const base = storyTemplate<InputProps>(Input, {});

export const Default = base({ placeholder: "Enter username" });
export const Prefix = base({
  placeholder: "Enter username",
  prefix: <SearchIcon />,
});
export const Suffix = base({
  placeholder: "Enter username",
  suffix: <InfoCircleIcon />,
});
export const PrefixSuffix = base({
  placeholder: "Enter username",
  suffix: <InfoCircleIcon />,
  prefix: <SearchIcon />,
});
export const Disabled = base({
  disabled: true,
  placeholder: "Enter username",
  suffix: <InfoCircleIcon />,
});
export const Invalid = base({
  invalid: true,
  placeholder: "Enter username",
  suffix: <InfoCircleIcon />,
});

export const PasswordInput = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Input
      type={show ? "text" : "password"}
      placeholder="Enter password"
      suffix={
        <span className="inline-flex items-center" onClick={handleClick}>
          {show ? <EyeClose /> : <EyeOpen />}
        </span>
      }
    />
  );
};

export const Everything = () => {
  return (
    <div className="flex flex-col gap-2 w-52">
      <Input placeholder="Username" />
      <Input placeholder="Username" prefix={<SearchIcon />} />
      <Input placeholder="Username" suffix={<InfoCircleIcon />} />
      <Input
        placeholder="Username"
        prefix={<SearchIcon />}
        suffix={<InfoCircleIcon />}
      />
      <Input disabled placeholder="Username" />
      <Input invalid placeholder="Username" />
      <PasswordInput />
    </div>
  );
};
