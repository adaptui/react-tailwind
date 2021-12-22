import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { CaretDownIcon, ClockIcon } from "../../icons";

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

export const Prefix: Story = {
  args: {
    prefix: <ClockIcon />,
  },
};

export const Suffix: Story = {
  args: {
    suffix: <CaretDownIcon />,
  },
};

export const PrefixSuffix: Story = {
  args: {
    prefix: <ClockIcon />,
    suffix: <CaretDownIcon />,
  },
};
