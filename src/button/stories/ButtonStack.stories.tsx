import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

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
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Stack: Story = {};
