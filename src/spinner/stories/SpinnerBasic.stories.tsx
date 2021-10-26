import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/SpinnerBasicJsx";
import ts from "./templates/SpinnerBasicTsx";
import { SpinnerBasic } from "./SpinnerBasic.component";

type Meta = ComponentMeta<typeof SpinnerBasic>;
type Story = ComponentStoryObj<typeof SpinnerBasic>;

export default {
  title: "Feedback/Spinner/Basic",
  component: SpinnerBasic,
  argTypes: createControls("spinner", {
    unions: ["size", "stroke"],
    ignore: ["unstable_system", "wrapElement", "as", "state"],
  }),
  parameters: {
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {
  args: { size: "md", stroke: "transparent" },
};

export const ExtraSmall: Story = {
  ...Default,
  args: { ...Default.args, size: "xs" },
};
export const Small: Story = {
  ...Default,
  args: { ...Default.args, size: "sm" },
};
export const Medium: Story = {
  ...Default,
  args: { ...Default.args, size: "md" },
};
export const Large: Story = {
  ...Default,
  args: { ...Default.args, size: "lg" },
};

export const StrokeVisible: Story = {
  ...Default,
  args: { ...Default.args, size: "lg", stroke: "visible" },
};
