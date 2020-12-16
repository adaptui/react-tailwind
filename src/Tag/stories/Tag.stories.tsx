import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import "./tag.css";
import { Tag, TagGroup, TagProps } from "../index";
import {
  ClockIcon,
  CrossIcon,
  PhotographIcon,
  ArrowNarrowRightIcon,
} from "../../icons";

export default {
  title: "Tag",
  component: Tag,
} as Meta;

const DStory: Story<TagProps> = args => <Tag {...args}>Tag</Tag>;

export const Default = DStory.bind({});
Default.args = { size: "md", closable: true, onClose: () => alert(1) };

export const GroupArrowNavigation = () => {
  return (
    <TagGroup allowArrowNavigation className="flex items-center gap-1">
      <Tag closable>Tag 1</Tag>
      <Tag closable>Tag 2</Tag>
      <Tag closable>Tag 3</Tag>
    </TagGroup>
  );
};

export const GroupNoArrowNavigation = () => {
  return (
    <TagGroup className="flex items-center gap-1">
      <Tag closable>Tag 1</Tag>
      <Tag closable>Tag 2</Tag>
      <Tag closable>Tag 3</Tag>
    </TagGroup>
  );
};

export const TagsExample = () => {
  const [tags, setTags] = React.useState(["One", "Two", "Three"]);

  return (
    <TagGroup allowArrowNavigation className="flex items-center gap-1">
      {tags.map(tag => (
        <Tag
          closable
          id={tag}
          onClose={id => setTags(tags.filter(t => t !== id))}
        >
          {tag}
        </Tag>
      ))}
    </TagGroup>
  );
};

const LIStory: Story<TagProps> = args => (
  <Tag prefix={<ClockIcon />} {...args}>
    Tag
  </Tag>
);

export const LIButton = LIStory.bind({});
LIButton.args = { size: "md" };

const RIStory: Story<TagProps> = args => (
  <Tag suffix={<ArrowNarrowRightIcon />} {...args}>
    Tag
  </Tag>
);

export const RIButton = RIStory.bind({});
RIButton.args = { size: "md" };

const BIStory: Story<TagProps> = args => (
  <Tag closable onClose={() => alert(1)}>
    Tag
  </Tag>
);

export const BIButton = BIStory.bind({});
BIButton.args = { size: "md" };

export const LStory: Story<TagProps> = args => (
  <Tag prefix={<PhotographIcon />} suffix={<CrossIcon />} {...args}>
    Tag
  </Tag>
);
