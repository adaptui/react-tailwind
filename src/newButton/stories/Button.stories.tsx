import * as React from "react";
import { Meta } from "@storybook/react";
import { Button } from "../index";
import { createControls } from "../../../.storybook/storybookUtils";
import { ButtonProps } from "reakit/ts";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

console.log("%c userEvent", "color: #917399", userEvent);

export default {
  title: "Primitives/NewButton",
  component: Button,
  argTypes: createControls("newButton", {
    unions: ["size", "variant"],
    ignore: [
      "unstable_system",
      "unstable_clickOnEnter",
      "unstable_clickOnSpace",
      "wrapElement",
    ],
  }),
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: { children: "Button", size: "md", variant: "solid" },
};

export const Small = { args: { ...Default.args, size: "sm" } };
export const Medium = { args: { ...Default.args } };
export const Large = { args: { ...Default.args, size: "lg" } };
export const ExtraLarge = { args: { ...Default.args, size: "xl" } };

export const Solid = { ...Default };
export const Subtle = { args: { ...Default.args, variant: "subtle" } };
export const Outline = { args: { ...Default.args, variant: "outline" } };
export const Ghost = { args: { ...Default.args, variant: "ghost" } };

export const Hover = {
  ...Default,
  play: async () => {
    const button = screen.getByText("Button");
    await userEvent.hover(button);
  },
};
