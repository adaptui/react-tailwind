import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/IconBasicJsx";
import ts from "./templates/IconBasicTsx";
import { IconBasic } from "./IconBasic.component";

type Meta = ComponentMeta<typeof IconBasic>;
type Story = ComponentStoryObj<typeof IconBasic>;

export default {
  title: "Primitives/Icons/Basic",
  component: IconBasic,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls("icon", {
    ignore: ["ref", "wrapElement", "as"],
  }),
} as Meta;

export const Basic: Story = {};
