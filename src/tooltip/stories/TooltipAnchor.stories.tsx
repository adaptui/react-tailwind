import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { SlotIcon } from "../../icons";

import js from "./templates/TooltipAnchorJsx";
import ts from "./templates/TooltipAnchorTsx";
import TooltipAnchor from "./TooltipAnchor.component";

type Meta = ComponentMeta<typeof TooltipAnchor>;
type Story = ComponentStoryObj<typeof TooltipAnchor>;

export default {
  title: "Popups/Tooltip/Anchor",
  component: TooltipAnchor,
  argTypes: createControls("tooltip", {
    ignore: [
      "__TYPE__",
      "wrapElement",
      "as",
      "ref",
      "prefix",
      "suffix",
      "content",
      "isDragging",
      "visible",
      "defaultVisible",
      "setVisible",
      "animated",
      "gutter",
      "timeout",
      "getAnchorRect",
      "fixed",
      "shift",
      "flip",
      "slide",
      "overlap",
      "sameWidth",
      "fitViewport",
      "arrowPadding",
      "overflowPadding",
      "renderCallback",
      "wrapperProps",
      "portalElement",
      "portalRef",
      "hideOnEscape",
      "hideOnControl",
    ],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Bottom: Story = { args: { placement: "bottom" } };
export const Right: Story = { args: { placement: "right" } };
export const Left: Story = { args: { placement: "left" } };
export const Top: Story = { args: { placement: "top" } };

export const ArrowBottom: Story = {
  args: { withArrow: true, placement: "bottom" },
};
export const ArrowRight: Story = {
  args: { withArrow: true, placement: "right" },
};
export const ArrowLeft: Story = {
  args: { withArrow: true, placement: "left" },
};
export const ArrowTop: Story = { args: { withArrow: true, placement: "top" } };

export const Prefix: Story = {
  args: { withArrow: true, placement: "top", prefix: <SlotIcon /> },
};

export const Suffix: Story = {
  args: { withArrow: true, placement: "top", suffix: <SlotIcon /> },
};
export const PrefixSuffix: Story = {
  args: {
    withArrow: true,
    placement: "top",
    prefix: <SlotIcon />,
    suffix: <SlotIcon />,
  },
};
