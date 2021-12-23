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

export const Invalid: Story = {
  args: { invalid: true },
};

export const Prefix: Story = {
  args: {
    prefix: <ClockIcon />,
  },
};

export const PrefixDisabled: Story = {
  args: {
    prefix: <ClockIcon />,
    disabled: true,
  },
};

export const PrefixInvalid: Story = {
  args: {
    prefix: <ClockIcon />,
    invalid: true,
  },
};

export const Suffix: Story = {
  args: {
    suffix: <CaretDownIcon />,
  },
};

export const SuffixDisabled: Story = {
  args: {
    suffix: <ClockIcon />,
    disabled: true,
  },
};

export const SuffixInvalid: Story = {
  args: {
    suffix: <ClockIcon />,
    invalid: true,
  },
};

export const PrefixSuffix: Story = {
  args: {
    prefix: <ClockIcon />,
    suffix: <CaretDownIcon />,
  },
};

export const PrefixSuffixDisabled: Story = {
  args: {
    prefix: <ClockIcon />,
    suffix: <CaretDownIcon />,
    disabled: true,
  },
};

export const PrefixSuffixInvalid: Story = {
  args: {
    prefix: <ClockIcon />,
    suffix: <CaretDownIcon />,
    invalid: true,
  },
};

export const PrefixSuffixLoading: Story = {
  args: {
    prefix: <ClockIcon />,
    suffix: <CaretDownIcon />,
    loading: true,
  },
};
