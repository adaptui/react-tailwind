import * as React from "react";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { EyeClose, EyeOpen } from "../../icons";
import { withIconA11y } from "../../utils";
import { CheckboxUIProps } from "../CheckboxProps";

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
        "defaultValue",
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
  args: { size: "md", defaultValue: false },
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
  args: { ...Default.args, defaultValue: true },
};
export const Indeterminate: Story = {
  ...Default,
  args: { ...Default.args, defaultValue: "mixed" },
};

export const Label: Story = {
  ...Default,
  args: { ...Default.args, label: "Checkboxs" },
};

export const MultilineLabel: Story = {
  ...Default,
  args: {
    ...Default.args,
    label:
      "Used when the checkbox is selected and will use its value for the form submission.",
    className: "w-72",
  },
};

export const Description: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: "Checkbox",
    description:
      "Used when the checkbox is selected and will use its value for the form submission.",
  },
};

export const Disabled: Story = {
  ...Default,
  args: { ...Default.args, disabled: true },
};

export const DisabledLabel: Story = {
  ...Default,
  args: { ...Default.args, label: "Checkbox", disabled: true },
};

export const DisabledDescription: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: "Checkbox",
    disabled: true,
    description:
      "Used when the checkbox is selected and will use its value for the form submission.",
  },
};

const CustomIconElement = (props: CheckboxUIProps) => (
  <>
    {props.isUnchecked ? withIconA11y(<EyeClose />) : null}
    {props.isChecked ? withIconA11y(<EyeOpen />) : null}
  </>
);

export const CustomIcon: Story = {
  ...Default,
  args: {
    ...Default.args,
    icon: CustomIconElement,
    label: "Custom Icons",
  },
};
