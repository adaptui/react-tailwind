import * as React from "react";
import { Composite, useCompositeState } from "reakit";

import { Box } from "../box";
import { TagsContext } from "./Tag";

export type TagGroupProps = {
  allowArrowNavigation?: boolean;
  className?: string;
  baseId?: string;
};

export const TagGroup: React.FC<TagGroupProps> = ({
  children,
  allowArrowNavigation = false,
  baseId,
  ...props
}) => {
  const composite = useCompositeState({ baseId });

  return allowArrowNavigation ? (
    <TagsContext.Provider value={composite}>
      <Composite {...composite} role="group" aria-label="Tags group" {...props}>
        {children}
      </Composite>
    </TagsContext.Provider>
  ) : (
    <Box as="div" role="group" aria-label="Tags group" {...props}>
      {children}
    </Box>
  );
};

export default TagGroup;
