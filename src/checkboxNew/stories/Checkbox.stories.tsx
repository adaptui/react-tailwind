import { ComponentStory, ComponentMeta } from "@storybook/react";
// @ts-ignore
import { withPseudoState } from "storybook-addon-pseudo-states/dist/withPseudoState";

import { Checkbox } from "../Checkbox";
import { createControls } from "../../../.storybook/storybookUtils";
import { useState } from "react";
import { Button } from "../..";
import { CheckboxProps } from "reakit/ts";

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
      "defaultState",
      "state",
      "onStateChange",
      "icon",
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
  argTypes: {
    size: { table: { disable: true } },
  },
};
export const Medium: ComponentStory<typeof Checkbox> = {
  ...Default,
  argTypes: {
    size: { table: { disable: true } },
  },
};
export const Large: ComponentStory<typeof Checkbox> = {
  ...Default,
  args: { ...Default.args, size: "lg" },
  argTypes: {
    size: { table: { disable: true } },
  },
};

export const UnChecked: ComponentStory<typeof Checkbox> = {
  ...Default,
};
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
  decorators: [withPseudoState],
  parameters: { options: { showPanel: true } },
};

export const HoverStack: ComponentStory<typeof Checkbox> = {
  ...CheckboxStack,
  parameters: { options: { showPanel: false }, pseudo: { hover: true } },
};
export const ActiveStack: ComponentStory<typeof Checkbox> = {
  ...CheckboxStack,
  parameters: { options: { showPanel: false }, pseudo: { active: true } },
};
export const FocusStack: ComponentStory<typeof Checkbox> = {
  ...CheckboxStack,
  parameters: { options: { showPanel: false }, pseudo: { focusVisible: true } },
};
export const DisabledStack: ComponentStory<typeof Checkbox> = {
  ...CheckboxStack,
  args: { disabled: true },
  parameters: { options: { showPanel: false } },
};
export const InvalidStack: ComponentStory<typeof Checkbox> = {
  ...CheckboxStack,
  args: { invalid: true },
  parameters: { options: { showPanel: true } },
};

export const Controlled = () => {
  const [state, setState] =
    useState<NonNullable<CheckboxProps["state"]>>(false);

  return (
    <div className="flex flex-col space-y-4">
      <Checkbox state={state} onStateChange={setState} />

      <div className="flex flex-col space-y-2">
        <Button onClick={() => setState(true)}>
          {`${state === true ? "Now" : "Change to"} Checked`}
        </Button>

        <Button onClick={() => setState(false)}>
          {`${state === false ? "Now" : "Change to"} UnChecked`}
        </Button>

        <Button onClick={() => setState("indeterminate")}>
          {`${state === "indeterminate" ? "Now" : "Change to"} Interderminate`}
        </Button>
      </div>
    </div>
  );
};

Controlled.parameters = { options: { showPanel: false } };

export const WithLabelStack: ComponentStory<typeof Checkbox> = {
  render: args => {
    return (
      <div className="flex flex-col space-y-4">
        <div className="space-x-4">
          <Checkbox {...args} label="Checkbox" size="sm" />
          <Checkbox {...args} label="Checkbox" size="md" />
          <Checkbox {...args} label="Checkbox" size="lg" />
        </div>
        <div className="space-x-4">
          <Checkbox {...args} label="Checkbox" size="sm" defaultState={true} />
          <Checkbox {...args} label="Checkbox" size="md" defaultState={true} />
          <Checkbox {...args} label="Checkbox" size="lg" defaultState={true} />
        </div>
        <div className="space-x-4">
          <Checkbox
            {...args}
            label="Checkbox"
            size="sm"
            defaultState="indeterminate"
          />
          <Checkbox
            {...args}
            label="Checkbox"
            size="md"
            defaultState="indeterminate"
          />
          <Checkbox
            {...args}
            label="Checkbox"
            size="lg"
            defaultState="indeterminate"
          />
        </div>
      </div>
    );
  },
  argTypes: {
    disabled: { table: { disable: false } },
    size: { table: { disable: true } },
    label: { table: { disable: true } },
    description: { table: { disable: true } },
  },
  decorators: [withPseudoState],
  parameters: { options: { showPanel: true } },
};

export const WithDescriptionStack: ComponentStory<typeof Checkbox> = {
  render: args => {
    return (
      <div className="flex flex-col space-y-8">
        <div className="max-w-xs space-y-4">
          <Checkbox
            {...args}
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="sm"
          />
          <Checkbox
            {...args}
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="md"
          />
          <Checkbox
            {...args}
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="lg"
          />
        </div>
        <div className="max-w-xs space-y-4">
          <Checkbox
            {...args}
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="sm"
            defaultState={true}
          />
          <Checkbox
            {...args}
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="md"
            defaultState={true}
          />
          <Checkbox
            {...args}
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="lg"
            defaultState={true}
          />
        </div>
        <div className="max-w-xs space-y-4">
          <Checkbox
            {...args}
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="sm"
            defaultState="indeterminate"
          />
          <Checkbox
            {...args}
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="md"
            defaultState="indeterminate"
          />
          <Checkbox
            {...args}
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="lg"
            defaultState="indeterminate"
          />
        </div>
      </div>
    );
  },
  argTypes: {
    disabled: { table: { disable: false } },
    size: { table: { disable: true } },
    label: { table: { disable: true } },
    description: { table: { disable: true } },
  },
  decorators: [withPseudoState],
  parameters: { options: { showPanel: true } },
};
