import * as React from "react";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { EyeClose, EyeOpen } from "../../icons";
import { withIconA11y } from "../../utils";
import { CheckboxOwnProps } from "../index";

import js from "./templates/CheckboxBasicJsx";
import ts from "./templates/CheckboxBasicTsx";
import { CheckboxBasic } from "./CheckboxBasic.component";

type Meta = ComponentMeta<typeof CheckboxBasic>;
type Story = ComponentStoryObj<typeof CheckboxBasic>;

export default {
  title: "Forms/Checkbox/Basic",
  component: CheckboxBasic,
  argTypes: {
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls("checkbox", {
      ignore: [
        "unstable_system",
        "unstable_clickOnEnter",
        "unstable_clickOnSpace",
        "wrapElement",
        "focusable",
        "as",
        "setState",
        "checked",
        "value",
        "defaultState",
        "state",
        "onStateChange",
        "icon",
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
  args: { size: "md", defaultState: false },
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

export const UnChecked: Story = { ...Default };
export const Checked: Story = {
  ...Default,
  args: { ...Default.args, defaultState: true },
};
export const Indeterminate: Story = {
  ...Default,
  args: { ...Default.args, defaultState: "indeterminate" },
};

const CustomIconElement: CheckboxOwnProps["icon"] = state => (
  <>
    {state.isUnchecked ? withIconA11y(<EyeClose />) : null}
    {state.isChecked ? withIconA11y(<EyeOpen />) : null}
  </>
);

export const CustomIcon: Story = {
  ...Default,
  args: {
    ...Default.args,
    icon: { CustomIconElement },
    label: "Custom Icons",
  },
};
