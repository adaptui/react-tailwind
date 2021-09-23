import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { createContext, tcm } from "../utils";
import { forwardRefWithAs } from "../utils/types";

export type ListContext = {
  size?: keyof Renderlesskit.GetThemeValue<"list", "size">;
};

const [ListProvider, useListContext] = createContext<ListContext>({
  name: "ListContext",
  errorMessage:
    "useListContext: `context` is undefined. Seems you forgot to wrap List components in `<List />`",
});

export { ListProvider, useListContext };

export type ListProps = BoxProps & ListContext & {};

export const List = forwardRefWithAs<ListProps, HTMLUListElement, "ul">(
  (props, ref) => {
    const { size = "md", className, ...rest } = props;

    const theme = useTheme();
    const listStyles = tcm(theme.list.base, theme.list.size[size], className);

    return (
      <ListProvider value={{ size }}>
        <Box as="ul" role="list" ref={ref} className={listStyles} {...rest} />
      </ListProvider>
    );
  },
);

List.displayName = "List";

export default List;

export const UnorderedList = forwardRefWithAs<
  ListProps,
  HTMLUListElement,
  "ul"
>((props, ref) => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const unorderedListStyles = tcm(theme.list.ul, className);

  return <List ref={ref} className={unorderedListStyles} {...rest} />;
});

UnorderedList.displayName = "UnorderedList";

export const OrderedList = forwardRefWithAs<ListProps, HTMLOListElement, "ol">(
  (props, ref) => {
    const { className, ...rest } = props;

    const theme = useTheme();
    const orderedListStyles = tcm(theme.list.ol, className);

    return <List as="ol" ref={ref} className={orderedListStyles} {...rest} />;
  },
);

OrderedList.displayName = "OrderedList";
