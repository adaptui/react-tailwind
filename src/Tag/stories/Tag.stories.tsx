import React from "react";
import { FaCopy } from "react-icons/fa";
import { Meta } from "@storybook/react/types-6-0";

import { Avatar } from "../../avatar";
import { ClockIcon } from "../../icons";
import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { TagGroupProps } from "../TagGroup";
import { Tag, TagGroup, TagProps } from "../index";

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

export const SuffixIcon = base({ closable: true, suffix: <FaCopy /> });

export const PrefixSuffixIcon = base({
  closable: true,
  prefix: <ClockIcon />,
  suffix: <FaCopy />,
});

export const Closable = base({
  closable: true,
  onClose: () => alert("Removed"),
});

export const WithAvatar = () => {
  return (
    <Tag closable>
      <Avatar className="ring-0" src="https://bit.ly/dan-abramov" />
      <span className="ml-2">Steve</span>
    </Tag>
  );
};

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
