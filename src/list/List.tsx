import * as React from "react";

import { Box, BoxProps } from "../box";
import { createContext } from "../utils";
import { forwardRefWithAs } from "../utils/types";

export type ListContext = {
  size?: keyof Renderlesskit.GetThemeValue<"list", "item", "size">;
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
    const { size = "md", ...rest } = props;

    return (
      <ListProvider value={{ size }}>
        <Box as="ul" role="list" ref={ref} {...rest} />
      </ListProvider>
    );
  },
);

List.displayName = "List";

export default List;
