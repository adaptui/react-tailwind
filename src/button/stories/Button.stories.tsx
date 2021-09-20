import { cx } from "@renderlesskit/react";
import { useState, useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  Button,
  CloseButton as CloseButtonComponent,
  CloseButtonProps,
} from "../index";
import { Spinner, SpinnerProps } from "../../spinner";
import { CaretRightIcon, ClockIcon } from "../../icons";
import { createControls } from "../../../.storybook/utils";

type Meta = ComponentMeta<typeof Button>;
type Story = ComponentStory<typeof Button>;

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

export const Default: Story = {
  args: { children: "Continue", size: "md", variant: "solid" },
  parameters: { options: { showPanel: true } },
};

export const Small: Story = {
  ...Default,
  args: { ...Default.args, size: "sm" },
};
export const Medium: Story = { ...Default };
export const Large: Story = {
  ...Default,
  args: { ...Default.args, size: "lg" },
};
export const ExtraLarge: Story = {
  ...Default,
  args: { ...Default.args, size: "xl" },
};

export const Solid: Story = { ...Default };
export const Subtle: Story = {
  ...Default,
  args: { ...Default.args, variant: "subtle" },
};
export const Outline: Story = {
  ...Default,
  args: { ...Default.args, variant: "outline" },
};
export const Ghost: Story = {
  ...Default,
  args: { ...Default.args, variant: "ghost" },
};

export const ButtonStack: Story = {
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
            Continues
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
  parameters: { options: { showPanel: true } },
};

export const DisabledStack: Story = {
  ...ButtonStack,
  args: { disabled: true },
  parameters: { options: { showPanel: false } },
};
export const LoadingStack: Story = {
  ...ButtonStack,
  args: { loading: true },
  parameters: { options: { showPanel: false } },
};

export const IconOnly: Story = {
  ...Default,
  args: { ...Default.args, iconOnly: <ClockIcon /> },
};

export const IconOnlyStack: Story = {
  ...ButtonStack,
  args: { iconOnly: <ClockIcon /> },
};

export const Suffix: Story = {
  ...Default,
  args: { ...Default.args, suffix: <CaretRightIcon /> },
};

export const SuffixStack: Story = {
  ...ButtonStack,
  args: { suffix: <CaretRightIcon /> },
};

export const Prefix: Story = {
  ...Default,
  args: { ...Default.args, prefix: <ClockIcon /> },
};

export const PrefixStack: Story = {
  ...ButtonStack,
  args: { prefix: <ClockIcon /> },
};

export const PrefixSuffix: Story = {
  ...Default,
  args: {
    ...Default.args,
    prefix: <ClockIcon />,
    suffix: <CaretRightIcon />,
  },
};

export const PrefixSuffixStack: Story = {
  ...ButtonStack,
  args: { prefix: <ClockIcon />, suffix: <CaretRightIcon /> },
};

export const CloseButton: Story = {
  ...Default,
  render: (args: CloseButtonProps) => <CloseButtonComponent {...args} />,
  args: { size: "md", variant: "solid" },
};

export const ExtendedVariant: Story = {
  ...Default,
  // @ts-ignore
  args: { ...Default.args, children: "tertiary", variant: "tertiary" },
};

export const ExtendedSize: Story = {
  ...Default,
  // @ts-ignore
  args: { ...Default.args, children: "xxl", size: "xxl" },
};

export const ExtendedPrefixSuffix: Story = {
  ...Default,
  args: {
    ...Default.args,
    className: "p-5 text-lg",
    prefix: <ClockIcon className="mx-4 text-lg text-orange-500" />,
    suffix: <CaretRightIcon className="mx-4 text-lg text-emarald-500" />,
  },
};

const ExtendedSpinnerComponent: React.FC<SpinnerProps> = props => {
  return (
    <Spinner
      size="em"
      {...props}
      className={cx(props.className, "text-red-500")}
    />
  );
};

export const ExtendedSpinner: Story = {
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

export const CustomSpinner: Story = {
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
