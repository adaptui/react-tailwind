import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

export type ListItemProps = BoxProps & {};

export const ListItem = forwardRefWithAs<ListItemProps, HTMLLIElement, "li">(
  (props, ref) => {
    const { className, ...rest } = props;

    const theme = useTheme();
    const listItemStyles = tcm(theme.list.item, className);

    return <Box as="li" ref={ref} className={listItemStyles} {...rest} />;
  },
);

ListItem.displayName = "ListItem";

export default ListItem;
