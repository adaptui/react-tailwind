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
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls("spinner", {
    unions: ["size", "themeColor", "track"],
    ignore: ["__TYPE__", "wrapElement", "as", "ref"],
  }),
} as Meta;

export const Default: Story = {
  args: { size: "md", themeColor: "base", track: "transparent" },
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
export const EmWithTextLG: Story = {
  ...Default,
  args: { ...Default.args, size: "em", className: "text-lg" },
};

export const Base: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "base" },
};
export const Primary: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "primary" },
};
export const Seconday: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "secondary" },
};
export const Success: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "success" },
};
export const Danger: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "danger" },
};
export const CurrentColor: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "current", className: "text-rose-800" },
};

export const BaseWithTrack: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "base", track: "visible" },
};
export const PrimaryWithTrack: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "primary", track: "visible" },
};
export const SecondayWithTrack: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "secondary", track: "visible" },
};
export const SuccessWithTrack: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "success", track: "visible" },
};
export const DangerWithTrack: Story = {
  ...Default,
  args: { ...Default.args, themeColor: "danger", track: "visible" },
};
export const WithoutTrack: Story = {
  ...Default,
  args: { ...Default.args, size: "lg", track: "transparent" },
};
