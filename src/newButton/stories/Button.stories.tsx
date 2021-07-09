import * as React from "react";
import { Meta } from "@storybook/react";
import { Button, ButtonProps } from "../index";
import { createControls } from "../../../.storybook/storybookUtils";
import { SearchIcon } from "../../icons";
export default {
  title: "Primitives/NewButton",
  component: Button,
  argTypes: createControls("newButton", {
    ignore: [
      "unstable_system",
      "unstable_clickOnEnter",
      "unstable_clickOnSpace",
      "wrapElement",
      "disabled",
      "focusable",
      "as",
      "iconOnly",
      "spinner",
    ],
  }),
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: { children: "Buttons", size: "md", variant: "solid" },
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Small = {
  ...Default,
  args: { ...Default.args, size: "sm" },
};
export const Medium = { ...Default, args: { ...Default.args } };
export const Large = { ...Default, args: { ...Default.args, size: "lg" } };
export const ExtraLarge = { ...Default, args: { ...Default.args, size: "xl" } };

export const Solid = { ...Default };
export const Subtle = {
  ...Default,
  args: { ...Default.args, variant: "subtle" },
};
export const Outline = {
  ...Default,
  args: { ...Default.args, variant: "outline" },
};
export const Ghost = {
  ...Default,
  args: { ...Default.args, variant: "ghost" },
};

export const ButtonStack = {
  render: (args: ButtonProps) => {
    console.log("%c args", "color: #f200e2", args);
    return (
      <div className="flex flex-col space-y-2">
        <div className="space-x-2">
          <Button {...args} size="sm" variant="solid">
            Button
          </Button>
          <Button {...args} size="md" variant="solid">
            Button
          </Button>
          <Button {...args} size="lg" variant="solid">
            Button
          </Button>
          <Button {...args} size="xl" variant="solid">
            Button
          </Button>
        </div>
        <div className="space-x-2">
          <Button {...args} size="sm" variant="subtle">
            Button
          </Button>
          <Button {...args} size="md" variant="subtle">
            Button
          </Button>
          <Button {...args} size="lg" variant="subtle">
            Button
          </Button>
          <Button {...args} size="xl" variant="subtle">
            Button
          </Button>
        </div>
        <div className="space-x-2">
          <Button {...args} size="sm" variant="outline">
            Button
          </Button>
          <Button {...args} size="md" variant="outline">
            Button
          </Button>
          <Button {...args} size="lg" variant="outline">
            Button
          </Button>
          <Button {...args} size="xl" variant="outline">
            Button
          </Button>
        </div>
        <div className="space-x-2">
          <Button {...args} size="sm" variant="ghost">
            Button
          </Button>
          <Button {...args} size="md" variant="ghost">
            Button
          </Button>
          <Button {...args} size="lg" variant="ghost">
            Button
          </Button>
          <Button {...args} size="xl" variant="ghost">
            Button
          </Button>
        </div>
      </div>
    );
  },
  parameters: { options: { showPanel: false } },
};

export const Hover = {
  ...ButtonStack,
  parameters: { ...ButtonStack.parameters, pseudo: { hover: true } },
};
export const Active = {
  ...ButtonStack,
  parameters: { ...ButtonStack.parameters, pseudo: { active: true } },
};
export const Focus = {
  ...ButtonStack,
  parameters: { ...ButtonStack.parameters, pseudo: { focusVisible: true } },
};
export const Disabled = {
  ...ButtonStack,
  args: { disabled: true },
};
export const Loading = {
  ...ButtonStack,
  args: { loading: true },
};

export const IconOnly = {
  ...Default,
  args: { ...Default.args, iconOnly: <SearchIcon /> },
};

export const IconOnlyStack = {
  ...ButtonStack,
  args: { iconOnly: <SearchIcon /> },
  argTypes: {
    loading: { table: { disable: false } },
    disabled: { table: { disable: false } },
    size: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
  parameters: { options: { showPanel: true } },
};
