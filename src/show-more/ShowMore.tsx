import * as React from "react";

import { ShowMoreButton } from "./ShowMoreButton";
import { ShowMoreContent } from "./ShowMoreContent";
import { ShowMoreProps, useShowMoreProps } from "./ShowMoreProps";

export const ShowMore = React.forwardRef<HTMLDivElement, ShowMoreProps>(
  (props, ref) => {
    const { buttonProps, contentProps } = useShowMoreProps(props);

    return (
      <>
        <ShowMoreContent {...contentProps} ref={ref} />
        <ShowMoreButton {...buttonProps} />
      </>
    );
  },
);

ShowMore.displayName = "ShowMore";
