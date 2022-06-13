import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/BoxBasicJsx";
import ts from "./templates/BoxBasicTsx";
import { BoxBasic } from "./BoxBasic.component";

type Meta = ComponentMeta<typeof BoxBasic>;
type Story = ComponentStoryObj<typeof BoxBasic>;

export default {
  title: "Primitives/Box/Basic",
  component: BoxBasic,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls(undefined, {
    ignore: ["wrapElement", "as", "ref"],
  }),
} as Meta;

export const Default: Story = {};
