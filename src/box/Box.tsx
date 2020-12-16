import * as React from "react";
import { Role, RoleProps } from "reakit";

import { forwardRefWithAs, PropsWithAs } from "../utils/types";

export type BoxProps = RoleProps & {};

function BoxComponent(
  props: PropsWithAs<BoxProps, "div">,
  ref: React.Ref<HTMLDivElement>,
) {
  return <Role ref={ref} {...props} />;
}

export const Box = forwardRefWithAs<BoxProps, "div">(BoxComponent);

export default Box;
