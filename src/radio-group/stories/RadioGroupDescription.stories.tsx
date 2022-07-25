import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import {
  createControls,
  createPreviewTabs,
  createUnionControl,
} from "../../../.storybook/utils";

import js from "./templates/RadioGroupDescriptionJsx";
import ts from "./templates/RadioGroupDescriptionTsx";
import { RadioGroupDescription } from "./RadioGroupDescription.component";

type Meta = ComponentMeta<typeof RadioGroupDescription>;
type Story = ComponentStoryObj<typeof RadioGroupDescription>;

export default {
  title: "Forms/RadioGroup/Description",
  component: RadioGroupDescription,
  argTypes: {
    size: createUnionControl(["sm", "md", "lg"]),
    ...createControls(undefined, {
      ignore: [
        "__TYPE__",
        "baseId",
        "unstable_virtual",
        "rtl",
        "orientation",
        "currentId",
        "loop",
        "wrap",
        "shift",
        "unstable_includesBaseElement",
        "defaultValue",
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
  args: { size: "md", themeColor: "base", maxVisibleItems: null },
};

export const WithDefaultState: Story = {
  ...Default,
  args: { ...Default.args, defaultValue: "orange" },
};

export const Small: Story = {
  ...Default,
  args: { ...Default.args, size: "sm" },
};
export const Medium: Story = {
  ...Default,
  args: { ...Default.args, size: "md" },
};
export const Large: Story = {
  ...Default,
  args: { ...Default.args, size: "lg" },
};

export const Base: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "base" },
};
export const Primary: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "primary" },
};
export const Danger: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "danger" },
};

export const Horizontal: Story = {
  ...Default,
  args: { ...Default.args, stack: "horizontal" },
};
