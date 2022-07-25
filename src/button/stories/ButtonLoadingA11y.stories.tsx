import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/ButtonLoadingA11yJsx";
import ts from "./templates/ButtonLoadingA11yTsx";
import { ButtonLoadingA11y } from "./ButtonLoadingA11y.component";

type Meta = ComponentMeta<typeof ButtonLoadingA11y>;
type Story = ComponentStoryObj<typeof ButtonLoadingA11y>;

export default {
  title: "Primitives/Button/LoadingAlly",
  component: ButtonLoadingA11y,
  argTypes: createControls("button", {
    ignore: [
      "__TYPE__",
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
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const LoadingAlly: Story = {};
