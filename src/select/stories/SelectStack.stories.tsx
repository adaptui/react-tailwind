import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { SlotIcon } from "../../icons";

import js from "./templates/SelectStackJsx";
import ts from "./templates/SelectStackTsx";
import { SelectStack } from "./SelectStack.component";

type Meta = ComponentMeta<typeof SelectStack>;
type Story = ComponentStoryObj<typeof SelectStack>;

export default {
  title: "Forms/Select/Stack",
  component: SelectStack,
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
  args: {},
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Invalid: Story = {
  args: { invalid: true },
};

export const Loading: Story = {
  args: { loading: true },
};

export const Prefix: Story = {
  args: {
    prefix: <SlotIcon />,
  },
};

export const PrefixDisabled: Story = {
  args: {
    prefix: <SlotIcon />,
    disabled: true,
  },
};

export const PrefixInvalid: Story = {
  args: {
    prefix: <SlotIcon />,
    invalid: true,
  },
};

export const PrefixLoading: Story = {
  args: {
    prefix: <SlotIcon />,
    loading: true,
  },
};
