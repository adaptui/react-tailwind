import { ComponentMeta, ComponentStory } from "@storybook/react";

import { createControls, createUnionControl } from "../../../.storybook/utils";

import {
  RadioComponent,
  RadioControlledComponent,
  RadioDescriptionComponent,
  RadioDisabledComponent,
} from "./RadioComponent";

type Meta = ComponentMeta<typeof RadioComponent>;
type Story = ComponentStory<typeof RadioComponent>;

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
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story = {
  args: { size: "md" },
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

export const WithDefaultState: Story = {
  ...Default,
  args: { ...Default.args, defaultState: "orange" },
  argTypes: {
    ...Default.argTypes,
  },
};

export const withDescription: Story = {
  render: args => <RadioDescriptionComponent {...args} />,
  args: { size: "md" },
  parameters: { options: { showPanel: true } },
};

export const WithDisabled: Story = {
  render: args => <RadioDisabledComponent {...args} />,
  args: { size: "md", defaultState: "orange" },
  parameters: { options: { showPanel: true } },
};

export const Controlled: Story = {
  render: args => <RadioControlledComponent {...args} />,
  args: { size: "md" },
  parameters: { options: { showPanel: true } },
};
