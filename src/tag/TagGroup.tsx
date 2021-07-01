import * as React from "react";
import { Composite, CompositeStateReturn, useCompositeState } from "reakit";

import { TagProps } from "./Tag";
import { Box, BoxProps } from "../box";
import { createContext } from "../utils";
import { forwardRefWithAs } from "../utils/types";

export type TagGroupContext = Pick<TagGroupProps, "size" | "variant"> & {
  composite: CompositeStateReturn;
};

const [TagGroupProvider, useTagGroup] = createContext<TagGroupContext>({
  strict: false,
  name: "TagGroupContext",
});

export { useTagGroup };

export type TagGroupProps = BoxProps &
  Pick<TagProps, "size" | "variant"> & {
    baseId?: string;
    allowArrowNavigation?: boolean;
  };

export const TagGroup = forwardRefWithAs<TagGroupProps, HTMLDivElement, "div">(
  (props, ref) => {
    const {
      size = "md",
      variant = "primary",
      baseId,
      allowArrowNavigation = true,
      children,
      ...rest
    } = props;
    const composite = useCompositeState({ baseId });
    const context = React.useMemo(
      () => ({ size, variant, composite }),
      [size, variant, composite],
    );

    return (
      <TagGroupProvider value={context}>
        {allowArrowNavigation ? (
          <Composite
            {...composite}
            role="group"
            aria-label="Tags group"
            ref={ref}
            {...rest}
          >
            {children}
          </Composite>
        ) : (
          <Box role="group" aria-label="Tags group" ref={ref} {...rest}>
            {children}
          </Box>
        )}
      </TagGroupProvider>
    );
  },
);

TagGroup.displayName = "TagGroup";

export default TagGroup;
