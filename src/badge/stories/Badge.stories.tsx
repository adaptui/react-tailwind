import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { Badge, BadgeProps } from "../Badge";

export default {
  title: "Badge",
  component: Badge,
  argTypes: createControls("badge", {
    unions: ["size", "variant"],
  }),
} as Meta;

const base = storyTemplate<BadgeProps>(
  args => {
    return <Badge {...args}>Badge</Badge>;
  },
  { variant: "primary", size: "sm" },
);

export const ExtraSmall = base({ size: "xs" });

export const Small = base({});

export const Large = base({ size: "lg" });

export const Primary = base({});

export const Secondary = base({ variant: "secondary" });

export const Outline = base({ variant: "outline" });

export const Ghost = base({ variant: "ghost" });
