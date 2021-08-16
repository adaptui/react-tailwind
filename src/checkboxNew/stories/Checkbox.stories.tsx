import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from "../Checkbox";
import { createControls } from "../../../.storybook/storybookUtils";

export default {
  title: "Forms/CheckboxNew",
  component: Checkbox,
  argTypes: createControls("checkbox", {
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
      "state",
      "onStateChange",
      "labelProps",
      "labelRef",
    ],
  }),
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = {
  args: { size: "md", defaultState: false },
  parameters: { options: { showPanel: true } },
};

export const Small: ComponentStory<typeof Checkbox> = {
  ...Default,
  args: { ...Default.args, size: "sm" },
};
export const Medium: ComponentStory<typeof Checkbox> = { ...Default };
export const Large: ComponentStory<typeof Checkbox> = {
  ...Default,
  args: { ...Default.args, size: "lg" },
};

export const UnChecked: ComponentStory<typeof Checkbox> = { ...Default };
export const Checked: ComponentStory<typeof Checkbox> = {
  ...Default,
  args: { ...Default.args, defaultState: true },
};
export const Indeterminate: ComponentStory<typeof Checkbox> = {
  ...Default,
  args: { ...Default.args, defaultState: "indeterminate" },
};

export const CheckboxStack: ComponentStory<typeof Checkbox> = {
  render: args => {
    return (
      <div className="flex flex-col space-y-2">
        <div className="space-x-2">
          <Checkbox {...args} size="sm" />
          <Checkbox {...args} size="md" />
          <Checkbox {...args} size="lg" />
        </div>
        <div className="space-x-2">
          <Checkbox {...args} size="sm" defaultState={true} />
          <Checkbox {...args} size="md" defaultState={true} />
          <Checkbox {...args} size="lg" defaultState={true} />
        </div>
        <div className="space-x-2">
          <Checkbox {...args} size="sm" defaultState="indeterminate" />
          <Checkbox {...args} size="md" defaultState="indeterminate" />
          <Checkbox {...args} size="lg" defaultState="indeterminate" />
        </div>
      </div>
    );
  },
  argTypes: {
    disabled: { table: { disable: false } },
    size: { table: { disable: true } },
  },
  parameters: { options: { showPanel: true } },
};
