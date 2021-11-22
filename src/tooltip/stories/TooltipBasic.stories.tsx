import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";
import { CaretDownIcon, InfoCircleIcon } from "../../icons";

import js from "./templates/TooltipBasicJsx";
import ts from "./templates/TooltipBasicTsx";
import TooltipBasic from "./TooltipBasic.component";

type Meta = ComponentMeta<typeof TooltipBasic>;
type Story = ComponentStoryObj<typeof TooltipBasic>;

export default {
  title: "Popups/Tooltip/Basic",
  component: TooltipBasic,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Bottom: Story = { args: { side: "bottom" } };
export const Right: Story = { args: { side: "right" } };
export const Left: Story = { args: { side: "left" } };
export const Top: Story = { args: { side: "top" } };

export const ArrowBottom: Story = { args: { withArrow: true, side: "bottom" } };
export const ArrowRight: Story = { args: { withArrow: true, side: "right" } };
export const ArrowLeft: Story = { args: { withArrow: true, side: "left" } };
export const ArrowTop: Story = { args: { withArrow: true, side: "top" } };

export const Prefix: Story = {
  args: { withArrow: true, side: "top", prefix: <InfoCircleIcon /> },
};

export const Suffix: Story = {
  args: { withArrow: true, side: "top", suffix: <CaretDownIcon /> },
};
export const PrefixSuffix: Story = {
  args: {
    withArrow: true,
    side: "top",
    prefix: <InfoCircleIcon />,
    suffix: <CaretDownIcon />,
  },
};
