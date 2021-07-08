import * as React from "react";
import { Meta } from "@storybook/react";
import { Button } from "../index";
import { createControls } from "../../../.storybook/storybookUtils";

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
} as Meta;

export const Small = {
  args: { children: "Button", size: "sm", variant: "solid" },
};
console.log("%c Small", "color: #0088cc", Small);

export const Medium = {
  args: { ...Small.args, size: "md" },
};

export const Large = {
  args: { ...Small.args, size: "lg" },
};

export const ExtraLarge = {
  args: { ...Small.args, size: "xl" },
};

export const Solid = { ...Small };

export const Playground = () => {
  return <Button type="button">Button</Button>;
};
