import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import {
  storyTemplate,
  createUnionControl,
} from "../../../.storybook/storybookUtils";
import { Badge, BadgeProps } from "../Badge";
import { Button } from "../../button";

export default {
  title: "Badge",
  component: Badge,
  argTypes: {
    size: createUnionControl(["sm", "md", "lg"]),
    variant: createUnionControl(["primary", "secondary", "outline", "ghosts"]),
    position: createUnionControl([
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right",
    ]),
    floating: { control: "boolean" },
  },
} as Meta;

const base = storyTemplate<BadgeProps>(
  args => {
    return <Badge {...args}>Badge</Badge>;
  },
  { variant: "primary", size: "md" },
);

export const Small = base({ size: "sm" });

export const Medium = base({});

export const Large = base({ size: "lg" });

export const Primary = base({});

export const Secondary = base({ variant: "secondary" });

export const Outline = base({ variant: "outline" });

export const Ghost = base({ variant: "ghost" });

const attached = storyTemplate<BadgeProps & { badgeValue?: string }>(
  args => {
    return (
      <Button variant="outline">
        Hello world
        <Badge {...args}>{args.badgeValue}</Badge>
      </Button>
    );
  },
  {
    variant: "primary",
    position: "top-right",
    floating: true,
    size: "sm",
    badgeValue: "22",
  },
);

export const Attached = attached({});
