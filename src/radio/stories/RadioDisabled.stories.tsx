import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import {
  createControls,
  createPreviewTabs,
  createUnionControl,
} from "../../../.storybook/utils";

import js from "./templates/RadioDisabledJsx";
import ts from "./templates/RadioDisabledTsx";
import { RadioDisabled } from "./RadioDisabled.component";

type Meta = ComponentMeta<typeof RadioDisabled>;
type Story = ComponentStoryObj<typeof RadioDisabled>;

export default {
  title: "Forms/Radio/Disabled",
  component: RadioDisabled,
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

export const WithDefaultState: Story = {
  ...Default,
  args: { ...Default.args, defaultState: "orange" },
};

export const Small: Story = {
  ...Default,
  args: { ...Default.args, size: "sm" },
};
export const Medium: Story = {
  ...Default,
};
export const Large: Story = {
  ...Default,
  args: { ...Default.args, size: "lg" },
};

export const ShowMoreDefault: Story = {
  ...Default,
  args: { ...Default.args, maxVisibleItems: 3 },
};

export const Horizontal: Story = {
  ...Default,
  args: { ...Default.args, size: "md", stack: "horizontal" },
};

export const ShowMoreHorizontal: Story = {
  ...Default,
  args: { ...Default.args, stack: "horizontal", maxVisibleItems: 3 },
};