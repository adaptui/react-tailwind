import * as React from "react";
import { Role, RoleProps } from "reakit";

import { forwardRefWithAs } from "../utils/types";

export type BoxProps = RoleProps;

export const Box = forwardRefWithAs<BoxProps, HTMLDivElement, "div">(
  (props, ref) => {
    return <Role ref={ref} {...props} />;
  },
);

export default Box;
