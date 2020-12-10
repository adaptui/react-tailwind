import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import "./button.css";
import { Button, ButtonProps } from "../index";
import {
  ClockIcon,
  ArrowNarrowRightIcon,
  CrossIcon,
  PhotographIcon,
  WheelIcon,
} from "../../icons";
import { Spinner } from "../../spinner";
import theme from "../../theme";
import { ocx } from "../../utils";

export default {
  title: "Button",
  component: Button,
} as Meta;

const DStory: Story<ButtonProps> = args => <Button {...args}>Button</Button>;

export const Default = DStory.bind({});
Default.args = { size: "md" };

const IStory: Story<ButtonProps> = args => (
  <Button {...args}>
    <WheelIcon />
  </Button>
);

export const IButton = IStory.bind({});
IButton.args = { size: "md" };

const LIStory: Story<ButtonProps> = args => (
  <Button leftIcon={<ClockIcon />} {...args}>
    Button
  </Button>
);

export const LIButton = LIStory.bind({});
LIButton.args = { size: "md" };

const RIStory: Story<ButtonProps> = args => (
  <Button rightIcon={<ArrowNarrowRightIcon />} {...args}>
    Button
  </Button>
);

export const RIButton = RIStory.bind({});
RIButton.args = { size: "md" };

const BIStory: Story<ButtonProps> = args => (
  <Button leftIcon={<PhotographIcon />} rightIcon={<CrossIcon />} {...args}>
    Button
  </Button>
);

export const BIButton = BIStory.bind({});
BIButton.args = { size: "md" };

const LStory: Story<ButtonProps> = args => (
  <Button leftIcon={<PhotographIcon />} rightIcon={<CrossIcon />} {...args}>
    Button
  </Button>
);

export const LButton = LStory.bind({});
LButton.args = { size: "md", isLoading: true };

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
  isLoading: true,
  spinner: <CustomSpinner />,
};
