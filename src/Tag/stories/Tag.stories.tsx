import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { Avatar } from "../../avatar";
import { Tag, TagGroup, TagProps } from "../index";
import { ClockIcon, PhotographIcon } from "../../icons";

export default {
  title: "Tag",
  component: Tag,
  argTypes: createControls("tag", {
    unions: ["size"],
    ignore: ["prefix", "suffix"],
  }),
} as Meta;

const base = storyTemplate<TagProps>(Tag, {
  children: "Tag",
  size: "sm",
  onClose: () => alert("Closable"),
});

export const Default = base({});

export const PrefixIcon = base({ prefix: <ClockIcon /> });

export const ClosableSuffixIcon = base({
  closable: true,
  suffix: <PhotographIcon />,
});

export const PrefixSuffixIcon = base({
  prefix: <ClockIcon />,
  closable: true,
  suffix: <PhotographIcon />,
});

export const WithAvatar = () => {
  return (
    <Tag closable>
      <Avatar className="ring-0" src="https://bit.ly/dan-abramov" />
      <span className="ml-2">Steve</span>
    </Tag>
  );
};

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

export const TagGroupsListExample = () => {
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
