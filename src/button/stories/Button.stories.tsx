import * as React from "react";
import { Meta } from "@storybook/react";
// @ts-ignore
import { withPseudoState } from "storybook-addon-pseudo-states/dist/withPseudoState";

import {
  Button,
  ButtonProps,
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
} as Meta;

export const Default = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: { children: "Continue", size: "md", variant: "solid" },
  decorators: [withPseudoState],
  parameters: { options: { showPanel: true } },
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

export const Hover = {
  ...ButtonStack,
  parameters: { options: { showPanel: false }, pseudo: { hover: true } },
};
export const Active = {
  ...ButtonStack,
  parameters: { options: { showPanel: false }, pseudo: { active: true } },
};
export const Focus = {
  ...ButtonStack,
  parameters: { options: { showPanel: false }, pseudo: { focusVisible: true } },
};
export const Disabled = {
  ...ButtonStack,
  args: { disabled: true },
  parameters: { options: { showPanel: false } },
};
export const Loading = {
  ...ButtonStack,
  args: { loading: true },
  parameters: { options: { showPanel: false } },
};

export const IconOnly = {
  ...Default,
  args: { ...Default.args, iconOnly: <ClockIcon /> },
};

export const IconOnlyStack = {
  ...ButtonStack,
  args: { iconOnly: <ClockIcon /> },
};

export const Suffix = {
  ...Default,
  args: { ...Default.args, suffix: <CaretRightIcon /> },
};

export const SuffixStack = {
  ...ButtonStack,
  args: { suffix: <CaretRightIcon /> },
};

export const Prefix = {
  ...Default,
  args: { ...Default.args, prefix: <ClockIcon /> },
};

export const PrefixStack = {
  ...ButtonStack,
  args: { prefix: <ClockIcon /> },
};

export const PrefixSuffix = {
  ...Default,
  args: { ...Default.args, prefix: <ClockIcon />, suffix: <CaretRightIcon /> },
};

export const PrefixSuffixStack = {
  ...ButtonStack,
  args: { prefix: <ClockIcon />, suffix: <CaretRightIcon /> },
};

export const CloseButton = {
  ...Default,
  render: (args: CloseButtonProps) => <CloseButtonComponent {...args} />,
  args: { size: "md", variant: "solid" },
};

export const ExtendedVariant = {
  ...Default,
  args: { ...Default.args, children: "tertiary", variant: "tertiary" },
};

export const ExtendedSize = {
  ...Default,
  args: { ...Default.args, children: "xxl", size: "xxl" },
};

const ExtendedSpinnerComponent = () => {
  return <Spinner size="em" className="text-base text-red-500" />;
};

export const ExtendedSpinner = {
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

export const CustomSpinner = {
  ...ExtendedSpinner,
  args: {
    ...ExtendedSpinner.args,
    spinner: <CustomSpinnerComponent />,
  },
};

export const LoadingAlly = () => {
  const [state, setState] = React.useState(false);

  React.useEffect(() => {
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
