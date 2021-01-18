import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Tag, TagGroup, TagProps } from "../index";
import { ClockIcon, PhotographIcon } from "../../icons";
import { Avatar } from "../../avatar";

export default {
  title: "Tag",
  component: Tag,
} as Meta;

const Component: Story<TagProps> = args => <Tag {...args}>Chennai</Tag>;

export const Default = Component.bind({});
Default.args = { size: "lg", onClose: () => alert(1) };

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
          key={tag}
          id={tag}
          onClose={id => setTags(tags.filter(t => t !== id))}
        >
          {tag}
        </Tag>
      ))}
    </TagGroup>
  );
};

export const PrefixIcon = Default.bind({});
PrefixIcon.args = { prefix: <ClockIcon /> };

export const SuffixIcon = Default.bind({});
SuffixIcon.args = { closable: true, suffix: <PhotographIcon /> };

export const PrefixSuffixIcon = Default.bind({});
PrefixSuffixIcon.args = {
  closable: true,
  prefix: <ClockIcon />,
  suffix: <PhotographIcon />,
};

export const Closable = Default.bind({});
Closable.args = { closable: true, onClose: () => alert("Removed") };

export const WithAvatar = () => {
  return (
    <Tag closable>
      <Avatar className="ring-0" src="https://bit.ly/dan-abramov" />
      <span className="ml-2">Steve</span>
    </Tag>
  );
};
