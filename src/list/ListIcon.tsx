import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useListContext } from "./List";
import { forwardRefWithAs } from "../utils/types";

export type ListIconProps = BoxProps & {};

export const ListIcon = forwardRefWithAs<
  ListIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { className, ...rest } = props;
  const { size = "md" } = useListContext();

  const theme = useTheme();
  const listIconStyles = cx(
    theme.list.icon.base,
    theme.list.icon.size[size],
    className,
  );

  return (
    <Box
      as="span"
      ref={ref}
      role="presentation"
      className={listIconStyles}
      {...rest}
    />
  );
});

ListIcon.displayName = "ListIcon";

export default ListIcon;
