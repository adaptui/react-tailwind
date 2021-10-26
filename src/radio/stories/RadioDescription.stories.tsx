import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import {
  createControls,
  createPreviewTabs,
  createUnionControl,
} from "../../../.storybook/utils";

import js from "./templates/RadioDescriptionJsx";
import ts from "./templates/RadioDescriptionTsx";
import { RadioDescription } from "./RadioDescription.component";

type Meta = ComponentMeta<typeof RadioDescription>;
type Story = ComponentStoryObj<typeof RadioDescription>;

export default {
  title: "Forms/Radio/Description",
  component: RadioDescription,
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
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {
  args: { size: "md", stack: "vertical" },
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

export const WithDefaultState: Story = {
  ...Default,
  args: { ...Default.args, defaultState: "orange" },
  argTypes: {
    ...Default.argTypes,
  },
};
