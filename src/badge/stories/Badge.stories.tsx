import React from "react";
import { Meta } from "@storybook/react";

import { Badge, BadgeProps } from "../Badge";
import { createControls } from "../../../.storybook/storybookUtils";

export default {
  title: "Primitives/Badge",
  component: Badge,
  argTypes: createControls("badge", {
    ignore: ["unstable_system", "wrapElement", "as"],
  }),
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default = {
  render: (args: BadgeProps) => <Badge {...args} />,
  args: {
    children: "Beta",
    size: "md",
    variant: "solid",
    themeColor: "default",
  },
  parameters: { options: { showPanel: true } },
};

export const Small = {
  ...Default,
  args: { ...Default.args, size: "sm" },
};
export const Medium = { ...Default };
export const Large = { ...Default, args: { ...Default.args, size: "lg" } };

export const Solid = { ...Default };
export const Subtle = {
  ...Default,
  args: { ...Default.args, variant: "subtle" },
};
export const Outline = {
  ...Default,
  args: { ...Default.args, variant: "outline" },
};

export const Primary = {
  ...Default,
  args: { ...Default.args, themeColor: "primary" },
};
export const Seconday = {
  ...Default,
  args: { ...Default.args, themeColor: "secondary" },
};
export const Success = {
  ...Default,
  args: { ...Default.args, themeColor: "success" },
};
export const Danger = {
  ...Default,
  args: { ...Default.args, themeColor: "danger" },
};
