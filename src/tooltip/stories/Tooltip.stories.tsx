import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import {
  storyTemplate,
  createUnionControl,
} from "../../../.storybook/storybookUtils";
import { Button } from "../../button";
import { Tooltip, TooltipProps } from "../Tooltip";
import { ExclamationTriangleIcon } from "../../icons";

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    placement: createUnionControl([
      "top",
      "right",
      "bottom",
      "left",
      "auto",
      "auto-start",
      "auto-end",
      "top-start",
      "top-end",
      "bottom-start",
      "bottom-end",
      "right-start",
      "right-end",
      "left-start",
      "left-end",
    ]),
  },
} as Meta<TooltipProps>;

const base = storyTemplate<TooltipProps>(
  args => (
    <div
      className="flex items-center justify-center m-auto"
      style={{
        width: "90vw",
        height: "90vh",
      }}
    >
      <Tooltip {...args}>{args.children}</Tooltip>
    </div>
  ),
  {
    placement: "bottom",
  },
);

export const Default = base({
  title: "Playground",
  children: <Button>Tooltip</Button>,
});

export const WithIcon = base({
  title: "Icon placed Tooltip",
  children: <Button>Tooltip</Button>,
  icon: <ExclamationTriangleIcon />,
});

export const WithArrow = base({
  children: <Button>Tooltip</Button>,
  title: "Tooltip with arrow",
  hasArrow: true,
  icon: <ExclamationTriangleIcon />,
});

export const WithLessGutter = base({
  children: <Button>Tooltip</Button>,
  title: "Tooltip with arrow",
  hasArrow: true,
  gutter: 5,
  icon: <ExclamationTriangleIcon />,
});

export const InitiallyVisible = base({
  children: <Button>Tooltip</Button>,
  title: "Tooltip with arrow",
  hasArrow: true,
  visible: true,
  icon: <ExclamationTriangleIcon />,
});
