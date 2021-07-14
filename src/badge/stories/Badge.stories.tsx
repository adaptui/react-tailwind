import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Badge } from "../Badge";
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
} as ComponentMeta<typeof Badge>;

export const Default: ComponentStory<typeof Badge> = {
  args: {
    children: "Beta",
    size: "md",
    variant: "solid",
    themeColor: "default",
  },
  parameters: { options: { showPanel: true } },
};

export const Small: ComponentStory<typeof Badge> = {
  ...Default,
  args: { ...Default.args, size: "sm" },
};
export const Medium: ComponentStory<typeof Badge> = { ...Default };
export const Large: ComponentStory<typeof Badge> = {
  ...Default,
  args: { ...Default.args, size: "lg" },
};

export const Solid: ComponentStory<typeof Badge> = { ...Default };
export const Subtle: ComponentStory<typeof Badge> = {
  ...Default,
  args: { ...Default.args, variant: "subtle" },
};
export const Outline: ComponentStory<typeof Badge> = {
  ...Default,
  args: { ...Default.args, variant: "outline" },
};

export const Primary: ComponentStory<typeof Badge> = {
  ...Default,
  args: { ...Default.args, themeColor: "primary" },
};
export const Seconday: ComponentStory<typeof Badge> = {
  ...Default,
  args: { ...Default.args, themeColor: "secondary" },
};
export const Success: ComponentStory<typeof Badge> = {
  ...Default,
  args: { ...Default.args, themeColor: "success" },
};
export const Danger: ComponentStory<typeof Badge> = {
  ...Default,
  args: { ...Default.args, themeColor: "danger" },
};
