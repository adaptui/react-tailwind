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
  args: { children: "Button", size: "md", variant: "solid" },
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
          <Button size="sm" variant="solid" {...args}>
            Button
          </Button>
          <Button size="md" variant="solid" {...args}>
            Button
          </Button>
          <Button size="lg" variant="solid" {...args}>
            Button
          </Button>
          <Button size="xl" variant="solid" {...args}>
            Button
          </Button>
        </div>
        <div className="space-x-2">
          <Button size="sm" variant="subtle" {...args}>
            Button
          </Button>
          <Button size="md" variant="subtle" {...args}>
            Button
          </Button>
          <Button size="lg" variant="subtle" {...args}>
            Button
          </Button>
          <Button size="xl" variant="subtle" {...args}>
            Button
          </Button>
        </div>
        <div className="space-x-2">
          <Button size="sm" variant="outline" {...args}>
            Button
          </Button>
          <Button size="md" variant="outline" {...args}>
            Button
          </Button>
          <Button size="lg" variant="outline" {...args}>
            Button
          </Button>
          <Button size="xl" variant="outline" {...args}>
            Button
          </Button>
        </div>
        <div className="space-x-2">
          <Button size="sm" variant="ghost" {...args}>
            Button
          </Button>
          <Button size="md" variant="ghost" {...args}>
            Button
          </Button>
          <Button size="lg" variant="ghost" {...args}>
            Button
          </Button>
          <Button size="xl" variant="ghost" {...args}>
            Button
          </Button>
        </div>
      </div>
    );
  },
  parameters: {
    options: {
      showPanel: false,
    },
  },
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
  parameters: { ...ButtonStack.parameters, pseudo: { focus: true } },
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
};
