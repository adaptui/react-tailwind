import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CheckboxGroupTriBoolStateJsx";
import ts from "./templates/CheckboxGroupTriBoolStateTsx";
import { CheckboxGroupTriBoolState } from "./CheckboxGroupTriBoolState.component";

type Meta = ComponentMeta<typeof CheckboxGroupTriBoolState>;
type Story = ComponentStoryObj<typeof CheckboxGroupTriBoolState>;

export default {
  title: "Forms/CheckboxGroup/TriBoolState",
  component: CheckboxGroupTriBoolState,
  parameters: {
    layout: "centered",
    options: { showPanel: false },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const TriBoolState: Story = {};
