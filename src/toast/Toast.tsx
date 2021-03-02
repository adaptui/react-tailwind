import * as React from "react";
import { Role, RoleProps } from "reakit";

import { forwardRefWithAs } from "../utils/types";

export type ToastProps = RoleProps & {};

export const Toast = forwardRefWithAs<ToastProps, HTMLDivElement, "div">(
  (props, ref) => {
    return <Role ref={ref} {...props} />;
  },
);

Toast.displayName = "Toast";

export default Toast;
