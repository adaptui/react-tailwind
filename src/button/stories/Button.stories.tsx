import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import "./button.css";
import {
  ClockIcon,
  CrossIcon,
  WheelIcon,
  PhotographIcon,
  ArrowNarrowRightIcon,
} from "../../icons";
import theme from "../../theme";
import { ocx } from "../../utils";
import { Spinner } from "../../spinner";
import { Button, ButtonProps, ButtonGroup, ButtonGroupProps } from "../index";

export default {
  title: "Button",
  component: Button,
} as Meta;

const DStory: Story<ButtonProps> = args => (
  <Button as="a" {...args}>
    Button
  </Button>
);

export const Default = DStory.bind({});
Default.args = { size: "md", variant: "primary" };

const IStory: Story<ButtonProps> = args => (
  <Button {...args}>
    <WheelIcon />
  </Button>
);

export const IButton = IStory.bind({});
IButton.args = { size: "md", variant: "primary" };

const LIStory: Story<ButtonProps> = args => (
  <Button leftIcon={<ClockIcon />} {...args}>
    Button
  </Button>
);

export const LIButton = LIStory.bind({});
LIButton.args = { size: "md", variant: "primary" };

const RIStory: Story<ButtonProps> = args => (
  <Button rightIcon={<ArrowNarrowRightIcon />} {...args}>
    Button
  </Button>
);

export const RIButton = RIStory.bind({});
RIButton.args = { size: "md", variant: "primary" };

const BIStory: Story<ButtonProps> = args => (
  <Button leftIcon={<PhotographIcon />} rightIcon={<CrossIcon />} {...args}>
    Button
  </Button>
);

export const BIButton = BIStory.bind({});
BIButton.args = { size: "md", variant: "primary" };

const LStory: Story<ButtonProps> = args => (
  <Button leftIcon={<PhotographIcon />} rightIcon={<CrossIcon />} {...args}>
    Button
  </Button>
);

export const LButton = LStory.bind({});
LButton.args = { size: "md", variant: "primary", isLoading: true };

const CLStory: Story<ButtonProps> = args => (
  <Button leftIcon={<PhotographIcon />} rightIcon={<CrossIcon />} {...args}>
    Button
  </Button>
);

const CustomSpinner = () => {
  return (
    <>
      Loading
      <Spinner className={ocx(theme.button.spinner, "ml-2")} />
    </>
  );
};

export const CLButton = CLStory.bind({});
CLButton.args = {
  size: "md",
  variant: "primary",
  isLoading: true,
  spinner: <CustomSpinner />,
};

const BGDefault: Story<ButtonGroupProps> = args => (
  <ButtonGroup className="space-x-4" {...args}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

export const GroupDefault = BGDefault.bind({});
GroupDefault.args = {};

const BGCDefault: Story<ButtonGroupProps> = args => (
  <ButtonGroup {...args}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

export const GroupCollapseDefault = BGCDefault.bind({});
GroupCollapseDefault.args = {
  isAttached: true,
  size: "md",
  variant: "primary",
};

const BGSDefault: Story<ButtonGroupProps> = args => (
  <ButtonGroup {...args}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

export const GroupStyledDefault = BGSDefault.bind({});
GroupStyledDefault.args = {
  isAttached: true,
  size: "lg",
  variant: "secondary",
};
