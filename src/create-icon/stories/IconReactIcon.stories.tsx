import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/IconReactIconJsx";
import ts from "./templates/IconReactIconTsx";
import { IconReactIcon } from "./IconReactIcon.component";

type Meta = ComponentMeta<typeof IconReactIcon>;
type Story = ComponentStoryObj<typeof IconReactIcon>;

export default {
  title: "Primitives/Icons/ReactIcon",
  component: IconReactIcon,
  argTypes: createControls("icon", {
    ignore: ["unstable_system", "wrapElement", "as"],
  }),
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts, deps: ["react-icons"] }),
  },
} as Meta;

export const Default: Story = {};
