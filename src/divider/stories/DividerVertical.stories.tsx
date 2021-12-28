import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";
import { Button } from "../../button";

import js from "./templates/DividerVerticalJsx";
import ts from "./templates/DividerVerticalTsx";
import { DividerVertical } from "./DividerVertical.component";

type Meta = ComponentMeta<typeof DividerVertical>;
type Story = ComponentStoryObj<typeof DividerVertical>;

export default {
  title: "Primitives/Divider/Vertical",
  component: DividerVertical,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {};

export const Label: Story = {
  args: { label: <Button variant="outline">Continue</Button> },
};
