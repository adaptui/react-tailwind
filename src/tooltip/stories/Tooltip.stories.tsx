import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { Tooltip, TooltipProps } from "../Tooltip";
import { Button } from "../../button";

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: createControls("tooltip", {
    unions: ["size", "variant"],
  }),
} as Meta<TooltipProps>;

const base = storyTemplate<TooltipProps>(
  args => <Tooltip {...args}>{args.children}</Tooltip>,
  {},
);

export const Default = base({
  children: <button>Tooltip</button>,
  title: "Do you know this is a tooltip?",
});
