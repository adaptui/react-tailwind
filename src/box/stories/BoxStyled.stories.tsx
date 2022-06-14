import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/BoxStyledJsx";
import ts from "./templates/BoxStyledTsx";
import { BoxStyled } from "./BoxStyled.component";

type Meta = ComponentMeta<typeof BoxStyled>;
type Story = ComponentStoryObj<typeof BoxStyled>;

export default {
  title: "Primitives/Box/Styled",
  component: BoxStyled,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls(undefined, {
    ignore: ["wrapElement", "as", "ref"],
  }),
} as Meta;

export const Styled: Story = {};
