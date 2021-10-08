import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/BoxAsJsx";
import ts from "./templates/BoxAsTsx";
import { Box } from "./BoxAs.component";

type Meta = ComponentMeta<typeof Box>;
type Story = ComponentStoryObj<typeof Box>;

export default {
  title: "Primitives/Box/As",
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
