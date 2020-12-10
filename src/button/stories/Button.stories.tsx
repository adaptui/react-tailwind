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
  <Button
    leftIcon={<ClockIcon />}
    leftIconProps={{ className: "flex mr-2" }}
    {...args}
  >
    Button
  </Button>
);

export const LIButton = LIStory.bind({});
LIButton.args = { size: "md" };

const RIStory: Story<ButtonProps> = args => (
  <Button
    rightIcon={<ArrowNarrowRightIcon />}
    rightIconProps={{ className: "flex ml-2" }}
    {...args}
  >
    Button
  </Button>
);

export const RIButton = RIStory.bind({});
RIButton.args = { size: "md" };

const BIStory: Story<ButtonProps> = args => (
  <Button
    leftIcon={<PhotographIcon />}
    leftIconProps={{ className: "flex mr-2" }}
    rightIcon={<CrossIcon />}
    rightIconProps={{ className: "flex ml-2" }}
    {...args}
  >
    Button
  </Button>
);

export const BIButton = BIStory.bind({});
BIButton.args = { size: "md" };
