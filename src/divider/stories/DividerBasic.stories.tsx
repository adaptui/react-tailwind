import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/DividerBasicJsx";
import ts from "./templates/DividerBasicTsx";
import { DividerBasic } from "./DividerBasic.component";

type Meta = ComponentMeta<typeof DividerBasic>;
type Story = ComponentStoryObj<typeof DividerBasic>;

export default {
  title: "Primitives/Divider/Basic",
  component: DividerBasic,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {};
