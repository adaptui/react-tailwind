import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/TagStackJsx";
import ts from "./templates/TagStackTsx";
import { TagStack } from "./TagStack.component";

type Meta = ComponentMeta<typeof TagStack>;
type Story = ComponentStoryObj<typeof TagStack>;

export default {
  title: "Primitives/Tag/Stack",
  component: TagStack,
  parameters: {
    layout: "centered",
    options: { showPanel: true, panelPosition: "right" },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls("tag", {
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
      "closable",
    ],
  }),
} as Meta;

export const Stack: Story = {};
