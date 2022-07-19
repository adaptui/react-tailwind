import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/RadioGroupDisabledJsx";
import ts from "./templates/RadioGroupDisabledTsx";
import { RadioGroupDisabled } from "./RadioGroupDisabled.component";

type Meta = ComponentMeta<typeof RadioGroupDisabled>;
type Story = ComponentStoryObj<typeof RadioGroupDisabled>;

export default {
  title: "Forms/RadioGroup/Disabled",
  component: RadioGroupDisabled,
  argTypes: {
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls("radio", {
      unions: ["themeColor"],
      ignore: [
        "__TYPE__",
        "wrapElement",
        "as",
        "ref",
        "defaultValue",
        "setValue",
        "value",
        "state",
        "inputValue",
        "onChange",
        "icon",
        "defaultChecked",
        "checked",
        "focusable",
        "autoFocus",
        "onFocusVisible",
        "accessibleWhenDisabled",
        "clickOnEnter",
        "clickOnSpace",
        "isChecked",
        "stack",
        "maxVisibleItems",
        "items",
        "setItems",
        "orientation",
        "virtualFocus",
        "rtl",
        "focusLoop",
        "focusWrap",
        "focusShift",
        "moves",
        "includesBaseElement",
        "activeId",
        "defaultActiveId",
        "setMoves",
        "setActiveId",
        "shouldRegisterItem",
        "getItem",
        "rowId",
        "preventScrollOnKeyDown",
        "focusOnMove",
        "withState",
        "composite",
        "label",
        "description",
        "stack",
      ],
    }),
  },
  parameters: {
    layout: "centered",
    preview: createPreviewTabs({ js, ts }),
    options: { showPanel: true },
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

export const ShowMoreDefault: Story = {
  ...Default,
  args: { ...Default.args, maxVisibleItems: 3 },
};

export const Horizontal: Story = {
  ...Default,
  args: { ...Default.args, stack: "horizontal" },
};

export const ShowMoreHorizontal: Story = {
  ...Default,
  args: { ...Default.args, stack: "horizontal", maxVisibleItems: 3 },
};
