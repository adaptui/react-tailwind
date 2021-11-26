import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/SliderBasicJsx";
import ts from "./templates/SliderBasicTsx";
import { SliderBasic } from "./SliderBasic.component";

type Meta = ComponentMeta<typeof SliderBasic>;
type Story = ComponentStoryObj<typeof SliderBasic>;

export default {
  title: "Forms/Slider/Basic",
  component: SliderBasic,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls("badge", {
    ignore: ["unstable_system", "wrapElement", "as"],
  }),
} as Meta;

export const Default: Story = {
  args: {},
};
