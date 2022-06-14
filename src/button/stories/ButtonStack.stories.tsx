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
  parameters: {
    layout: "centered",
    options: { showPanel: true, panelPosition: "right" },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls("button", {
    ignore: [
      "wrapElement",
      "as",
      "ref",
      "autoFocus",
      "focusable",
      "accessibleWhenDisabled",
      "onFocusVisible",
      "clickOnEnter",
      "clickOnSpace",
      "size",
      "themeColor",
      "variant",
      "prefix",
      "suffix",
      "iconOnly",
      "spinner",
    ],
  }),
} as Meta;

export const Stack: Story = {};
