import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";

import js from "./templates/CheckboxTriBoolStateJsx";
import ts from "./templates/CheckboxTriBoolStateTsx";
import { CheckboxTriBoolState } from "./CheckboxTriBoolState.component";

type Meta = ComponentMeta<typeof CheckboxTriBoolState>;
type Story = ComponentStoryObj<typeof CheckboxTriBoolState>;

export default {
  title: "Forms/Checkbox/TriBoolState",
  component: CheckboxTriBoolState,
  argTypes: {
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls("checkbox", {
      ignore: [
        "unstable_system",
        "unstable_clickOnEnter",
        "unstable_clickOnSpace",
        "wrapElement",
        "focusable",
        "as",
        "setState",
        "checked",
        "value",
        "defaultState",
        "state",
        "onStateChange",
        "icon",
      ],
    }),
  },
  parameters: {
    layout: "centered",
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {};
