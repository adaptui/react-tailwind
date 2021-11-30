import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { Switch, SwitchText } from "../index";

import js from "./templates/SwitchBasicJsx";
import ts from "./templates/SwitchBasicTsx";
import { SwitchBasic } from "./SwitchBasic.component";

type Meta = ComponentMeta<typeof SwitchBasic>;
type Story = ComponentStoryObj<typeof SwitchBasic>;

export default {
  title: "Forms/Switch/Basic",
  component: SwitchBasic,
  argTypes: {
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls(undefined, {
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

export const Default: Story = {
  args: { size: "md", defaultState: false },
};

export const Small: Story = {
  ...Default,
  args: { ...Default.args, size: "sm" },
};
export const Medium: Story = {};
export const Large: Story = {
  ...Default,
  args: { ...Default.args, size: "lg" },
};
export const ExtraLarge: Story = {
  ...Default,
  args: { ...Default.args, size: "xl" },
};

export const UnChecked: Story = { ...Default };
export const Checked: Story = {
  ...Default,
  args: { ...Default.args, defaultState: true },
};

export const Label: Story = {
  args: { label: "Switch" },
};

export const Description: Story = {
  args: {
    label: "Switch",
    description:
      "Used when the checkbox is selected and will use its value for the form submission.",
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledLabel: Story = {
  args: { disabled: true, label: "Switch" },
};

export const DisabledDescription: Story = {
  args: {
    disabled: true,
    label: "Switch",
    description:
      "Used when the checkbox is selected and will use its value for the form submission.",
  },
};

export const Custom = () => {
  const DARK_MODE = "Dark Mode";
  const LIGHT_MODE = "Light Mode";
  return (
    <Switch defaultState={true}>
      {({ isChecked }) => {
        return (
          <>
            <SwitchText data-testid="testid-mode">
              {isChecked ? DARK_MODE : LIGHT_MODE}
            </SwitchText>
          </>
        );
      }}
    </Switch>
  );
};
