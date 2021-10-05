import * as React from "react";
import { Separator } from "reakit";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createUnionControl } from "../../../.storybook/utils";
import { RadioGroupState } from "../index";

import {
  RadioComponent,
  RadioControlledComponent,
  RadioDescriptionComponent,
  RadioDisabledComponent,
  RadioShowMoreComponent,
  RadioShowMoreHorizontalComponent,
} from "./RadioComponent";

type Meta = ComponentMeta<typeof RadioComponent>;
type Story = ComponentStoryObj<typeof RadioComponent>;

export default {
  title: "Forms/Radio",
  component: RadioComponent,
  argTypes: {
    size: createUnionControl(["sm", "md", "lg"]),
    ...createControls(undefined, {
      ignore: [
        "baseId",
        "unstable_virtual",
        "rtl",
        "orientation",
        "currentId",
        "loop",
        "wrap",
        "shift",
        "unstable_includesBaseElement",
        "defaultState",
        "state",
        "onStateChange",
        "wrapElement",
        "disabled",
      ],
    }),
  },
  parameters: { layout: "centered" },
} as Meta;

export const Default: Story = {
  args: { size: "md", stack: "vertical" },
  parameters: { options: { showPanel: true } },
};

export const Small: Story = {
  ...Default,
  args: { ...Default.args, size: "sm" },
  argTypes: {
    ...Default.argTypes,
  },
};
export const Medium: Story = {
  ...Default,
  argTypes: {
    ...Default.argTypes,
  },
};
export const Large: Story = {
  ...Default,
  args: { ...Default.args, size: "lg" },
  argTypes: {
    ...Default.argTypes,
  },
};

export const Stack: Story = {
  args: { size: "md", stack: "horizontal" },
  parameters: { options: { showPanel: true } },
};

export const withDescription: Story = {
  render: args => <RadioDescriptionComponent {...args} />,
  args: { size: "md", stack: "vertical" },
  parameters: { options: { showPanel: true } },
};

export const WithDisabled: Story = {
  render: args => <RadioDisabledComponent {...args} />,
  args: { size: "md", stack: "vertical", defaultState: "orange" },
  parameters: { options: { showPanel: true } },
};

export const WithDefaultState: Story = {
  ...Default,
  args: { ...Default.args, defaultState: "orange" },
  argTypes: {
    ...Default.argTypes,
  },
};

export const Controlled = () => {
  const [state, onStateChange] =
    React.useState<RadioGroupState["state"]>("apple");

  return (
    <div className="flex flex-col m-auto">
      <RadioComponent
        stack="horizontal"
        state={state}
        onStateChange={onStateChange}
      />
      <Separator className="my-4" />
      <RadioControlledComponent state={state} onStateChange={onStateChange} />
    </div>
  );
};
Controlled.parameters = { options: { showPanel: false } };

export const WithShowMoreVertical: Story = {
  render: args => <RadioShowMoreComponent {...args} />,
  args: { size: "md", stack: "vertical" },
  parameters: { options: { showPanel: false }, layout: "centered" },
};

export const WithShowMoreHorizontal: Story = {
  render: args => <RadioShowMoreHorizontalComponent {...args} />,
  args: { size: "md", stack: "horizontal" },
  parameters: { options: { showPanel: false }, layout: "centered" },
};
