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
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls(undefined, {
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
  args: { placeholder: "Search" },
};

export const Disabled: Story = {
  args: { placeholder: "Search", disabled: true },
};

export const Autosize: Story = {
  args: {
    placeholder: "Search",
    autoSize: true,
    defaultValue: "Velit voluptatem a veritatis nam ducimus ut corporis.",
  },
};

export const Invalid: Story = {
  args: {
    placeholder: "Search",
    invalid: true,
    icon: <SlotIcon />,
  },
};

export const Loading: Story = {
  args: { placeholder: "Search", autoSize: true, loading: true },
};
