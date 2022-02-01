import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { createControls, createPreviewTabs } from "../../../.storybook/utils";
import { cx, SlotIcon, Spinner, SpinnerProps } from "../../index";

import js from "./templates/ButtonBasicJsx";
import ts from "./templates/ButtonBasicTsx";
import { ButtonBasic } from "./ButtonBasic.component";

type Meta = ComponentMeta<typeof ButtonBasic>;
type Story = ComponentStoryObj<typeof ButtonBasic>;

export default {
  title: "Primitives/Button/Basic",
  component: ButtonBasic,
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
    options: { showPanel: true },
    preview: createPreviewTabs({ js, ts }),
  },
} as Meta;

export const Default: Story = {
  args: { size: "md", variant: "solid" },
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

export const IconOnly: Story = {
  ...Default,
  args: { ...Default.args, iconOnly: <SlotIcon /> },
};

export const Suffix: Story = {
  ...Default,
  args: { ...Default.args, suffix: <SlotIcon /> },
};

export const Prefix: Story = {
  ...Default,
  args: { ...Default.args, prefix: <SlotIcon /> },
};

export const PrefixSuffix: Story = {
  ...Default,
  args: {
    ...Default.args,
    prefix: <SlotIcon />,
    suffix: <SlotIcon />,
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    prefix: <SlotIcon />,
    suffix: <SlotIcon />,
    disabled: true,
  },
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
    prefix: <SlotIcon className="mx-4 text-lg text-orange-500" />,
    suffix: <SlotIcon className="mx-4 text-lg text-emerald-500" />,
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
    <div className="m-2 inline-block h-4 w-4 animate-spin rounded-[50%] border-2 border-t-green-500 border-r-transparent border-b-green-500 border-l-transparent after:block after:h-4 after:w-4" />
  );
};

export const CustomSpinner: Story = {
  ...ExtendedSpinner,
  args: {
    ...ExtendedSpinner.args,
    spinner: <CustomSpinnerComponent />,
  },
};
