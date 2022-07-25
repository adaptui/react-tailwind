import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/RadioStackJsx";
import ts from "./templates/RadioStackTsx";
import { RadioStack } from "./RadioStack.component";

type Meta = ComponentMeta<typeof RadioStack>;
type Story = ComponentStoryObj<typeof RadioStack>;

export default {
  title: "Forms/Radio/Stack",
  component: RadioStack,
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
        "isIndeterminate",
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
        "size",
        "label",
        "description",
        "themeColor",
      ],
    }),
  },
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {};

export const Label: Story = {
  args: { label: "Radio" },
};

export const Description: Story = {
  args: {
    label: "Radio",
    description:
      "Used when the radio is selected and will use its value for the form submission.",
  },
};

export const DisabledStack: Story = {
  args: { disabled: true },
};

export const DisabledLabel: Story = {
  args: { disabled: true, label: "Radio" },
};

export const DisabledDescription: Story = {
  args: {
    disabled: true,
    label: "Radio",
    description:
      "Used when the radio is selected and will use its value for the form submission.",
  },
};
