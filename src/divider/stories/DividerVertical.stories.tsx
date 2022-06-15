import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
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
  argTypes: createControls("divider", {
    ignore: ["wrapElement", "as", "ref"],
  }),
} as Meta;

export const Default: Story = {
  args: { orientation: "vertical", labelPosition: "center" },
};

export const LabelCenter: Story = {
  ...Default,
  args: { ...Default.args, label: <Button variant="outline">Continue</Button> },
};

export const LabelStart: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: <Button variant="outline">Continue</Button>,
    labelPosition: "start",
  },
};

export const LabelEnd: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: <Button variant="outline">Continue</Button>,
    labelPosition: "end",
  },
};
