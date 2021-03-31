import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type ListItemProps = BoxProps & {};

export const ListItem = forwardRefWithAs<ListItemProps, HTMLLIElement, "li">(
  (props, ref) => {
    const { className, ...rest } = props;

    const theme = useTheme();
    const listItemStyles = cx(theme.list.item, className);

    return <Box as="li" ref={ref} className={listItemStyles} {...rest} />;
  },
);

ListItem.displayName = "ListItem";

export default ListItem;
