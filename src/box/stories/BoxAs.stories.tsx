import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/BoxAsJsx";
import ts from "./templates/BoxAsTsx";
import { BoxAs } from "./BoxAs.component";

type Meta = ComponentMeta<typeof BoxAs>;
type Story = ComponentStoryObj<typeof BoxAs>;

export default {
  title: "Primitives/Box/As",
  component: BoxAs,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls(undefined, {
    ignore: ["wrapElement", "as", "ref"],
  }),
} as Meta;

export const As: Story = {};
