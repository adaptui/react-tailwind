import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import {
  createControls,
  createPreviewTabs,
  createUnionControl,
} from "../../../.storybook/utils";

import js from "./templates/RadioBasicJsx";
import ts from "./templates/RadioBasicTsx";
import { RadioBasic } from "./RadioBasic.component";

type Meta = ComponentMeta<typeof RadioBasic>;
type Story = ComponentStoryObj<typeof RadioBasic>;

export default {
  title: "Forms/Radio/Basic",
  component: RadioBasic,
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
  args: { size: "md" },
};

export const WithDefaultState: Story = {
  ...Default,
  args: { ...Default.args, state: "apple" },
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
