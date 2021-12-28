import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { SlotIcon } from "../../index";

import js from "./templates/ButtonStackJsx";
import ts from "./templates/ButtonStackTsx";
import { ButtonStack } from "./ButtonStack.component";

type Meta = ComponentMeta<typeof ButtonStack>;
type Story = ComponentStoryObj<typeof ButtonStack>;

export default {
  title: "Primitives/Button/Stack",
  component: ButtonStack,
  argTypes: createControls(undefined, {
    ignore: [
      "unstable_system",
      "unstable_clickOnEnter",
      "unstable_clickOnSpace",
      "wrapElement",
      "focusable",
      "as",
      "iconOnly",
      "spinner",
      "suffix",
      "prefix",
    ],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {
  argTypes: {
    loading: { table: { disable: false } },
    disabled: { table: { disable: false } },
    size: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
};

export const DisabledStack: Story = {
  ...Default,
  args: { disabled: true },
  parameters: { options: { showPanel: false } },
};

export const LoadingStack: Story = {
  ...Default,
  args: { loading: true },
  parameters: { options: { showPanel: false } },
};

export const IconOnlyStack: Story = {
  ...ButtonStack,
  args: { iconOnly: <SlotIcon /> },
};

export const SuffixStack: Story = {
  ...ButtonStack,
  args: { suffix: <SlotIcon /> },
};

export const PrefixStack: Story = {
  ...ButtonStack,
  args: { prefix: <SlotIcon /> },
};

export const PrefixSuffixStack: Story = {
  ...ButtonStack,
  args: { prefix: <SlotIcon />, suffix: <SlotIcon /> },
};
