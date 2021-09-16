import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Spinner } from "../index";
import { createControls } from "../../../.storybook/utils";

type Meta = ComponentMeta<typeof Spinner>;
type Story = ComponentStory<typeof Spinner>;

export default {
  title: "Feedback/Spinner",
  component: Spinner,
  argTypes: createControls("spinner", {
    unions: ["size", "stroke"],
    ignore: ["unstable_system", "wrapElement", "as", "state"],
  }),
} as Meta;

export const Default: Story = {
  args: { size: "md", stroke: "transparent" },
  parameters: { options: { showPanel: true } },
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
