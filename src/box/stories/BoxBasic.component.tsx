import * as React from "react";

import {
  Box as RenderlesskitBox,
  BoxProps as RenderlesskitBoxProps,
  forwardRefWithAs,
} from "../../index";

export type BoxProps = RenderlesskitBoxProps & {};

export const Box = forwardRefWithAs<BoxProps, HTMLDivElement, "div">(
  (props, ref) => {
    return (
      <RenderlesskitBox ref={ref} {...props}>
        Box
      </RenderlesskitBox>
    );
  },
);

Box.displayName = "List";

export default Box;
