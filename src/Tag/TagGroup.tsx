import * as React from "react";
import { Box } from "../box";
import { Composite, useCompositeState } from "reakit";
import { TagsContext } from ".";

export type TagGroupProps = {
  allowArrowNavigation?: boolean;
  className?: string;
};

export const TagGroup: React.FC<TagGroupProps> = ({
  children,
  allowArrowNavigation = false,
  ...props
}) => {
  const composite = useCompositeState();

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
