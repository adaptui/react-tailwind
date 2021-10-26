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
  argTypes: createControls("icon", {
    ignore: ["unstable_system", "wrapElement", "as"],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {};
