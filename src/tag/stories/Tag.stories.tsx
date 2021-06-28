import React from "react";
import { FaCopy } from "react-icons/fa";
import { Meta } from "@storybook/react";

import { Avatar } from "../../avatar";
import { ClockIcon } from "../../icons";
import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { Tag, TagProps, TagGroupProps, TagGroup } from "..";

export default {
  title: "Primitives/Tag",
  component: Tag,
  argTypes: createControls("tag", {
    unions: ["size", "variant"],
    ignore: ["onClose"],
  }),
} as Meta<TagProps>;

const base = storyTemplate<TagProps>(args => <Tag {...args}>Chennai</Tag>, {
  size: "md",
  variant: "primary",
  closable: false,
  onClose: () => alert(1),
});

export const Small = base({ size: "sm" });
export const Medium = base({});
export const Large = base({ size: "lg" });

export const Primary = base({ variant: "primary" });
export const secondary = base({ variant: "secondary" });
export const outline = base({ variant: "outline" });
export const ghost = base({ variant: "ghost" });

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

export const WithAvatar = storyTemplate<TagProps>(
  args => {
    return (
      <Tag {...args}>
        <Avatar className="ring-0" src="https://bit.ly/dan-abramov" />
        <span className="ml-2">Steve</span>
      </Tag>
    );
  },
  {
    size: "md",
    variant: "primary",
    closable: true,
    onClose: () => alert(1),
  },
)({});

const group = storyTemplate<TagGroupProps>(
  args => {
    return (
      <TagGroup {...args} className="flex items-center gap-1">
        <Tag closable>Tag 1</Tag>
        <Tag closable>Tag 2</Tag>
        <Tag closable>Tag 3</Tag>
      </TagGroup>
    );
  },
  {
    size: "md",
    variant: "primary",
    allowArrowNavigation: true,
  },
);

export const GroupArrowNavigation = group({});

export const GroupNoArrowNavigation = group({ allowArrowNavigation: false });

export const TagGroupsListExample = storyTemplate<TagGroupProps>(
  args => {
    const [tags, setTags] = React.useState(["One", "Two", "Three"]);

    return (
      <TagGroup className="flex items-center gap-1" {...args}>
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
  },
  {
    size: "md",
    variant: "primary",
    allowArrowNavigation: true,
  },
)({});
