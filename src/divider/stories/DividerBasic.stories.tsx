import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { Button } from "../../button";

import js from "./templates/DividerBasicJsx";
import ts from "./templates/DividerBasicTsx";
import { DividerBasic } from "./DividerBasic.component";

type Meta = ComponentMeta<typeof DividerBasic>;
type Story = ComponentStoryObj<typeof DividerBasic>;

export default {
  title: "Primitives/Divider/Basic",
  component: DividerBasic,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls("divider", {
    ignore: ["__TYPE__", "wrapElement", "as", "ref"],
  }),
} as Meta;

export const Default: Story = {
  args: { orientation: "horizontal", labelPosition: "center" },
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
