import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/SpinnerStackJsx";
import ts from "./templates/SpinnerStackTsx";
import { SpinnerStack } from "./SpinnerStack.component";

type Meta = ComponentMeta<typeof SpinnerStack>;
type Story = ComponentStoryObj<typeof SpinnerStack>;

export default {
  title: "Feedback/Spinner/Stack",
  component: SpinnerStack,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
  argTypes: createControls(undefined, {
    ignore: ["wrapElement", "as", "ref"],
  }),
} as Meta;

export const Stack: Story = {};
