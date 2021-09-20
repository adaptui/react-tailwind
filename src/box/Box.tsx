import { Role, RoleProps } from "reakit";

import { forwardRefWithAs } from "../utils/types";

export type BoxProps = RoleProps & {};

export const Box = forwardRefWithAs<BoxProps, HTMLDivElement, "div">(
  (props, ref) => {
    return <Role ref={ref} {...props} />;
  },
);

Box.displayName = "Box";

export default Box;
