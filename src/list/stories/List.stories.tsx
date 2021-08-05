import { Meta } from "@storybook/react";

import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { InfoCircleIcon } from "../../icons";
import {
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  OrderedList,
  ListProps,
} from "../index";

export default {
  title: "Primitives/List",
  component: List,
  argTypes: { size: createUnionControl(["sm", "md", "lg"]) },
} as Meta;

const ul = storyTemplate<ListProps>(
  args => {
    return (
      <UnorderedList {...args}>
        <ListItem>This is the 1st ListItem</ListItem>
        <ListItem>This is the 2nd ListItem</ListItem>
        <ListItem>This is the 3rd ListItem</ListItem>
      </UnorderedList>
    );
  },
  { size: "md" },
);

export const ULSmall = ul({ size: "sm" });
export const ULMedium = ul({});
export const ULLarge = ul({ size: "lg" });

const ol = storyTemplate<ListProps>(
  args => {
    return (
      <OrderedList {...args}>
        <ListItem>This is the 1st ListItem</ListItem>
        <ListItem>This is the 2nd ListItem</ListItem>
        <ListItem>This is the 3rd ListItem</ListItem>
      </OrderedList>
    );
  },
  { size: "md" },
);

export const OLSmall = ol({ size: "sm" });
export const OLMedium = ol({});
export const OLLarge = ol({ size: "lg" });

export const NestedUL = () => {
  return (
    <UnorderedList>
      <ListItem>
        This is the 1st ListItem
        <UnorderedList>
          <ListItem>This is the nested 1st ListItem</ListItem>
          <ListItem>This is the nested 2nd ListItem</ListItem>
          <ListItem>This is the nested 3rd ListItem</ListItem>
        </UnorderedList>
      </ListItem>
      <ListItem>This is the 2nd ListItem</ListItem>
      <ListItem>This is the 3rd ListItem</ListItem>
    </UnorderedList>
  );
};

export const NestedOL = () => {
  return (
    <OrderedList>
      <ListItem>
        This is the 1st ListItem
        <OrderedList>
          <ListItem>This is the nested 1st ListItem</ListItem>
          <ListItem>This is the nested 2nd ListItem</ListItem>
          <ListItem>This is the nested 3rd ListItem</ListItem>
        </OrderedList>
      </ListItem>
      <ListItem>This is the 2nd ListItem</ListItem>
      <ListItem>This is the 3rd ListItem</ListItem>
    </OrderedList>
  );
};

export const CustomMarker = () => {
  return (
    <List size="lg">
      <ListItem>
        <ListIcon children={<InfoCircleIcon />} />
        This is the 1st ListItem
        <List size="lg" className="ml-[1em]">
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
};
