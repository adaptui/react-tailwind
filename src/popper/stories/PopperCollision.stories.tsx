import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls } from "../../../.storybook/utils";

import { PopperCollision } from "./PopperCollision.component";

type Meta = ComponentMeta<typeof PopperCollision>;
type Story = ComponentStoryObj<typeof PopperCollision>;

export default {
  title: "Primitives/Popper/Collision",
  component: PopperCollision,
  parameters: {
    layout: "centered",
    options: { showPanel: true },
  },
  argTypes: createControls(undefined, {
    ignore: ["unstable_system", "wrapElement", "as"],
  }),
} as Meta;

export const Default: Story = {};
