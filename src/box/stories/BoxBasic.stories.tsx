import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/BoxBasicJsx";
import ts from "./templates/BoxBasicTsx";
import { Box } from "./BoxBasic.component";

type Meta = ComponentMeta<typeof Box>;
type Story = ComponentStoryObj<typeof Box>;

export default {
  title: "Primitives/Box/Basic",
  component: Box,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
    argTypes: createControls(undefined, {
      ignore: ["unstable_system", "wrapElement"],
    }),
  },
} as Meta;

export const Default: Story = {};
