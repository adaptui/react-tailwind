import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/ButtonLoadingA11yJsx";
import ts from "./templates/ButtonLoadingA11yTsx";
import { ButtonLoadingA11y } from "./ButtonLoadingA11y.component";

type Meta = ComponentMeta<typeof ButtonLoadingA11y>;
type Story = ComponentStoryObj<typeof ButtonLoadingA11y>;

export default {
  title: "Primitives/Button/LoadingA11y",
  component: ButtonLoadingA11y,
  argTypes: createControls("button", {
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

export const Default: Story = {};
