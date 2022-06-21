import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { SlotIcon } from "../../icons";

import js from "./templates/TextareaStackJsx";
import ts from "./templates/TextareaStackTsx";
import { TextareaStack } from "./TextareaStack.component";

type Meta = ComponentMeta<typeof TextareaStack>;
type Story = ComponentStoryObj<typeof TextareaStack>;

export default {
  title: "Forms/Textarea/Stack",
  component: TextareaStack,
  argTypes: {
    ...createControls("textarea", {
      ignore: [
        "ref",
        "wrapElement",
        "as",
        "icon",
        "spinner",
        "inputRef",
        "ghostRef",
        "inputStyles",
        "autoSizeOnChange",
        "autoFocus",
        "focusable",
        "accessibleWhenDisabled",
        "onFocusVisible",
        "clickOnEnter",
        "clickOnSpace",
        "size",
        "variant",
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
  args: {
    placeholder: "Search",
    autoSize: false,
    disabled: false,
    invalid: false,
    loading: false,
    resize: "none",
  },
};

export const Disabled: Story = {
  args: { ...Default.args, placeholder: "Search", disabled: true },
};

export const Autosize: Story = {
  args: {
    ...Default.args,
    placeholder: "Search",
    autoSize: true,
    defaultValue: "Velit voluptatem a veritatis nam ducimus ut corporis.",
  },
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    placeholder: "Search",
    invalid: true,
    icon: <SlotIcon />,
    autoSize: true,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    placeholder: "Search",
    autoSize: true,
    loading: true,
  },
};
