import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CheckboxGroupTriStringStateJsx";
import ts from "./templates/CheckboxGroupTriStringStateTsx";
import { CheckboxGroupTriStringState } from "./CheckboxGroupTriStringState.component";

type Meta = ComponentMeta<typeof CheckboxGroupTriStringState>;
type Story = ComponentStoryObj<typeof CheckboxGroupTriStringState>;

export default {
  title: "Forms/CheckboxGroup/TriStringState",
  component: CheckboxGroupTriStringState,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const TriStringState: Story = {};
