import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { InfoCircleIcon } from "../../icons";
import { List, ListItem, ListIcon, ListProps } from "../index";

export default {
  title: "List",
  component: List,
  argTypes: { size: createUnionControl(["sm", "md", "lg"]) },
} as Meta;

const base = storyTemplate<ListProps>(
  args => {
    return (
      <List {...args} className="space-y-2">
        <ListItem>
          <ListIcon children={<InfoCircleIcon />} />
          This is the 1st ListItem
        </ListItem>
        <ListItem>
          <ListIcon children={<InfoCircleIcon />} />
          This is the 2nd ListItem
        </ListItem>
        <ListItem>
          <ListIcon children={<InfoCircleIcon />} />
          This is the 3rd ListItem
        </ListItem>
      </List>
    );
  },
  { size: "md" },
);

export const Small = base({ size: "sm" });
export const Medium = base({});
export const Large = base({ size: "lg" });
