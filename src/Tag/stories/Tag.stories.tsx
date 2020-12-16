import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import "./tag.css";
import { Tag, TagProps } from "../index";
import {
  ClockIcon,
  CrossIcon,
  WheelIcon,
  PhotographIcon,
  ArrowNarrowRightIcon,
} from "../../icons";

export default {
  title: "Tag",
  component: Tag,
} as Meta;

const DStory: Story<TagProps> = args => (
  <Tag as="a" {...args}>
    Tag
  </Tag>
);

export const Default = DStory.bind({});
Default.args = { size: "md" };

const IStory: Story<TagProps> = args => (
  <Tag {...args}>
    <WheelIcon />
  </Tag>
);

export const IButton = IStory.bind({});
IButton.args = { size: "md" };

const LIStory: Story<TagProps> = args => (
  <Tag prefix={<ClockIcon />} {...args}>
    Tag
  </Tag>
);

export const LIButton = LIStory.bind({});
LIButton.args = { size: "md" };

const RIStory: Story<TagProps> = args => (
  <Tag postfix={<ArrowNarrowRightIcon />} {...args}>
    Tag
  </Tag>
);

export const RIButton = RIStory.bind({});
RIButton.args = { size: "md" };

const BIStory: Story<TagProps> = args => (
  <Tag prefix={<PhotographIcon />} postfix={<CrossIcon />} {...args}>
    Tag
  </Tag>
);

export const BIButton = BIStory.bind({});
BIButton.args = { size: "md" };

export const LStory: Story<TagProps> = args => (
  <Tag prefix={<PhotographIcon />} postfix={<CrossIcon />} {...args}>
    Tag
  </Tag>
);
