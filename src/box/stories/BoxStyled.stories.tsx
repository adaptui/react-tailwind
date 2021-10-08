import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/BoxStyledJsx";
import ts from "./templates/BoxStyledTsx";
import { Box } from "./BoxStyled.component";

type Meta = ComponentMeta<typeof Box>;
type Story = ComponentStoryObj<typeof Box>;

export default {
  title: "Primitives/Box/Styled",
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
