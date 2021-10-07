import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { useListContext } from "./List";

export type ListIconProps = BoxProps & {};

export const ListIcon = forwardRefWithAs<
  ListIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { className, ...rest } = props;
  const { size = "md" } = useListContext();

  const theme = useTheme();
  const listIconStyles = tcm(
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
