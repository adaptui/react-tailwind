import * as React from "react";
import { Meta } from "@storybook/react";
import { storyTemplate } from "../../../.storybook/storybookUtils";
import { Button, ButtonProps } from "../index";

export default {
  title: "Primitives/NewButton",
  component: Button,
} as Meta;

const base = storyTemplate<ButtonProps>(Button, {
  children: "Button",
  size: "sm",
  variant: "solid",
});

export const Small = base({});
export const Medium = base({ size: "md" });
export const Large = base({ size: "lg" });
export const ExtraLarge = base({ size: "xl" });

export const Primary = base({});

export const Playground = () => {
  return <Button type="button">Button</Button>;
};
