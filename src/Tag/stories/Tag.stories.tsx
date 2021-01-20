import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { Tag, TagGroup, TagProps } from "../index";
import { ClockIcon, PhotographIcon } from "../../icons";
import { Avatar } from "../../avatar";
import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { TagGroupProps } from "../TagGroup";

export default {
  title: "Tag",
  component: Tag,
  argTypes: createControls("tag", { unions: ["size"], ignore: ["onClose"] }),
} as Meta<TagProps>;

const base = storyTemplate<TagProps>(args => <Tag {...args}>Chennai</Tag>, {
  closable: false,
  size: "sm",
});

export const Default = base({ size: "lg", onClose: () => alert(1) });

export const PrefixIcon = base({ prefix: <ClockIcon /> });

export const SuffixIcon = base({ closable: true, suffix: <PhotographIcon /> });

export const PrefixSuffixIcon = base({
  closable: true,
  prefix: <ClockIcon />,
  suffix: <PhotographIcon />,
});

export const Closable = base({
  closable: true,
  onClose: () => alert("Removed"),
});

const group = storyTemplate<TagGroupProps>(args => {
  return (
    <TagGroup
      {...args}
      allowArrowNavigation
      className="flex items-center gap-1"
    >
      <Tag closable>Tag 1</Tag>
      <Tag closable>Tag 2</Tag>
      <Tag closable>Tag 3</Tag>
    </TagGroup>
  );
});

export const GroupArrowNavigation = group({});
export const GroupNoArrowNavigation = group({ allowArrowNavigation: false });

export const WithAvatar = () => {
  return (
    <Tag closable>
      <Avatar className="ring-0" src="https://bit.ly/dan-abramov" />
      <span className="ml-2">Steve</span>
    </Tag>
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
