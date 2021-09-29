import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls } from "../../../.storybook/utils";
import { Spinner } from "../index";

type Meta = ComponentMeta<typeof Spinner>;
type Story = ComponentStoryObj<typeof Spinner>;

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

export const Play = () => {
  return <Spinner as="span" />;
};
