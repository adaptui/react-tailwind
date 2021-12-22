import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { CaretDownIcon, ClockIcon } from "../../icons";

import js from "./templates/InputStackJsx";
import ts from "./templates/InputStackTsx";
import { InputStack } from "./InputStack.component";

type Meta = ComponentMeta<typeof InputStack>;
type Story = ComponentStoryObj<typeof InputStack>;

export default {
  title: "Forms/Input/Stack",
  component: InputStack,
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

export const Invalid: Story = {
  args: { placeholder: "Search", invalid: true },
};

export const Prefix: Story = {
  args: {
    placeholder: "Search",
    prefix: <ClockIcon />,
  },
};

export const PrefixDisabled: Story = {
  args: {
    placeholder: "Search",
    prefix: <ClockIcon />,
    disabled: true,
  },
};

export const PrefixInvalid: Story = {
  args: {
    placeholder: "Search",
    prefix: <ClockIcon />,
    invalid: true,
  },
};

export const Suffix: Story = {
  args: {
    placeholder: "Search",
    suffix: <CaretDownIcon />,
  },
};

export const SuffixDisabled: Story = {
  args: {
    placeholder: "Search",
    suffix: <ClockIcon />,
    disabled: true,
  },
};

export const SuffixInvalid: Story = {
  args: {
    placeholder: "Search",
    suffix: <ClockIcon />,
    invalid: true,
  },
};

export const PrefixSuffix: Story = {
  args: {
    placeholder: "Search",
    prefix: <ClockIcon />,
    suffix: <CaretDownIcon />,
  },
};

export const PrefixSuffixDisabled: Story = {
  args: {
    placeholder: "Search",
    prefix: <ClockIcon />,
    suffix: <CaretDownIcon />,
    disabled: true,
  },
};

export const PrefixSuffixInvalid: Story = {
  args: {
    placeholder: "Search",
    prefix: <ClockIcon />,
    suffix: <CaretDownIcon />,
    invalid: true,
  },
};

export const PrefixSuffixLoading: Story = {
  args: {
    placeholder: "Search",
    prefix: <ClockIcon />,
    suffix: <CaretDownIcon />,
    loading: true,
  },
};
