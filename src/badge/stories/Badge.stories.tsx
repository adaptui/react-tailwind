import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { Badge, BadgeProps } from "../Badge";
import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";

export default {
  title: "Badge",
  component: Badge,
  argTypes: createControls("badge", {
    unions: ["size", "variant"],
  }),
} as Meta;

const base = storyTemplate<BadgeProps>(
  args => {
    return <Badge {...args}>badge</Badge>;
  },
  { variant: "primary" },
);

export const Primary = base({
  size: "sm",
});

export const XSmall = base({
  size: "xs",
});

export const Small = base({
  size: "sm",
});

export const Medium = base({
  size: "md",
});

export const Large = base({
  size: "lg",
});
