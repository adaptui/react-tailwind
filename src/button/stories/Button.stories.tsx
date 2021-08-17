import { useState, useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// @ts-ignore
import { withPseudoState } from "storybook-addon-pseudo-states/dist/withPseudoState";

import {
  Button,
  CloseButton as CloseButtonComponent,
  CloseButtonProps,
} from "../index";
import { Spinner } from "../../spinner";
import { CaretRightIcon, ClockIcon } from "../../icons";
import { createControls } from "../../../.storybook/storybookUtils";

export default {
  title: "Primitives/Button",
  component: Button,
  argTypes: createControls("button", {
    ignore: [
      "unstable_system",
      "unstable_clickOnEnter",
      "unstable_clickOnSpace",
      "wrapElement",
      "focusable",
      "as",
      "iconOnly",
      "spinner",
      "suffix",
      "prefix",
    ],
  }),
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = {
  args: { children: "Continue", size: "md", variant: "solid" },
  decorators: [withPseudoState],
  parameters: { options: { showPanel: true } },
};

export const Small: ComponentStory<typeof Button> = {
  ...Default,
  args: { ...Default.args, size: "sm" },
};
export const Medium: ComponentStory<typeof Button> = { ...Default };
export const Large: ComponentStory<typeof Button> = {
  ...Default,
  args: { ...Default.args, size: "lg" },
};
export const ExtraLarge: ComponentStory<typeof Button> = {
  ...Default,
  args: { ...Default.args, size: "xl" },
};

export const Solid: ComponentStory<typeof Button> = { ...Default };
export const Subtle: ComponentStory<typeof Button> = {
  ...Default,
  args: { ...Default.args, variant: "subtle" },
};
export const Outline: ComponentStory<typeof Button> = {
  ...Default,
  args: { ...Default.args, variant: "outline" },
};
export const Ghost: ComponentStory<typeof Button> = {
  ...Default,
  args: { ...Default.args, variant: "ghost" },
};

export const ButtonStack: ComponentStory<typeof Button> = {
  render: args => {
    return (
      <div className="flex flex-col space-y-2">
        <div className="space-x-2">
          <Button {...args} size="sm" variant="solid">
            Continue
          </Button>
          <Button {...args} size="md" variant="solid">
            Continue
          </Button>
          <Button {...args} size="lg" variant="solid">
            Continue
          </Button>
          <Button {...args} size="xl" variant="solid">
            Continue
          </Button>
        </div>
        <div className="space-x-2">
          <Button {...args} size="sm" variant="subtle">
            Continue
          </Button>
          <Button {...args} size="md" variant="subtle">
            Continue
          </Button>
          <Button {...args} size="lg" variant="subtle">
            Continue
          </Button>
          <Button {...args} size="xl" variant="subtle">
            Continue
          </Button>
        </div>
        <div className="space-x-2">
          <Button {...args} size="sm" variant="outline">
            Continue
          </Button>
          <Button {...args} size="md" variant="outline">
            Continue
          </Button>
          <Button {...args} size="lg" variant="outline">
            Continue
          </Button>
          <Button {...args} size="xl" variant="outline">
            Continue
          </Button>
        </div>
        <div className="space-x-2">
          <Button {...args} size="sm" variant="ghost">
            Continue
          </Button>
          <Button {...args} size="md" variant="ghost">
            Continue
          </Button>
          <Button {...args} size="lg" variant="ghost">
            Continue
          </Button>
          <Button {...args} size="xl" variant="ghost">
            Continue
          </Button>
        </div>
      </div>
    );
  },
  argTypes: {
    loading: { table: { disable: false } },
    disabled: { table: { disable: false } },
    size: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
  decorators: [withPseudoState],
  parameters: { options: { showPanel: true } },
};

export const HoverStack: ComponentStory<typeof Button> = {
  ...ButtonStack,
  parameters: { options: { showPanel: false }, pseudo: { hover: true } },
};
export const ActiveStack: ComponentStory<typeof Button> = {
  ...ButtonStack,
  parameters: { options: { showPanel: false }, pseudo: { active: true } },
};
export const FocusStack: ComponentStory<typeof Button> = {
  ...ButtonStack,
  parameters: { options: { showPanel: false }, pseudo: { focusVisible: true } },
};
export const DisabledStack: ComponentStory<typeof Button> = {
  ...ButtonStack,
  args: { disabled: true },
  parameters: { options: { showPanel: false } },
};
export const LoadingStack: ComponentStory<typeof Button> = {
  ...ButtonStack,
  args: { loading: true },
  parameters: { options: { showPanel: false } },
};

export const IconOnly: ComponentStory<typeof Button> = {
  ...Default,
  args: { ...Default.args, iconOnly: <ClockIcon /> },
};

export const IconOnlyStack: ComponentStory<typeof Button> = {
  ...ButtonStack,
  args: { iconOnly: <ClockIcon /> },
};

export const Suffix: ComponentStory<typeof Button> = {
  ...Default,
  args: { ...Default.args, suffix: <CaretRightIcon /> },
};

export const SuffixStack: ComponentStory<typeof Button> = {
  ...ButtonStack,
  args: { suffix: <CaretRightIcon /> },
};

export const Prefix: ComponentStory<typeof Button> = {
  ...Default,
  args: { ...Default.args, prefix: <ClockIcon /> },
};

export const PrefixStack: ComponentStory<typeof Button> = {
  ...ButtonStack,
  args: { prefix: <ClockIcon /> },
};

export const PrefixSuffix: ComponentStory<typeof Button> = {
  ...Default,
  args: { ...Default.args, prefix: <ClockIcon />, suffix: <CaretRightIcon /> },
};

export const PrefixSuffixStack: ComponentStory<typeof Button> = {
  ...ButtonStack,
  args: { prefix: <ClockIcon />, suffix: <CaretRightIcon /> },
};

export const CloseButton: ComponentStory<typeof Button> = {
  ...Default,
  render: (args: CloseButtonProps) => <CloseButtonComponent {...args} />,
  args: { size: "md", variant: "solid" },
};

export const ExtendedVariant: ComponentStory<typeof Button> = {
  ...Default,
  // @ts-ignore
  args: { ...Default.args, children: "tertiary", variant: "tertiary" },
};

export const ExtendedSize: ComponentStory<typeof Button> = {
  ...Default,
  // @ts-ignore
  args: { ...Default.args, children: "xxl", size: "xxl" },
};

const ExtendedSpinnerComponent = () => {
  return <Spinner size="em" className="text-base text-red-500" />;
};

export const ExtendedSpinner: ComponentStory<typeof Button> = {
  ...Default,
  args: {
    ...Default.args,
    loading: true,
    spinner: <ExtendedSpinnerComponent />,
  },
};

const CustomSpinnerComponent = () => {
  return (
    <div className="inline-block w-4 h-4 m-2 after:block after:w-4 after:h-4 rounded-[50%] border-2 border-t-green-500 border-r-transparent border-b-green-500 border-l-transparent animate-spin" />
  );
};

export const CustomSpinner: ComponentStory<typeof Button> = {
  ...ExtendedSpinner,
  args: {
    ...ExtendedSpinner.args,
    spinner: <CustomSpinnerComponent />,
  },
};

export const LoadingAlly = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    let timeout: number;
    if (state) {
      timeout = window.setTimeout(() => setState(prev => !prev), 3000);
    }

    return () => window.clearTimeout(timeout);
  }, [state]);

  return (
    <div className="space-x-2">
      <Button size="md" variant="solid">
        Previous Button
      </Button>
      <Button
        size="md"
        variant="solid"
        loading={state}
        prefix={<ClockIcon />}
        suffix={<CaretRightIcon />}
        onClick={() => setState(!state)}
      >
        Send Email
      </Button>
      <Button size="md" variant="solid">
        Next Button
      </Button>
    </div>
  );
};
LoadingAlly.parameters = { options: { showPanel: false } };
