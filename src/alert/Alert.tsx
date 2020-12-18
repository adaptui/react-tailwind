import * as React from "react";
import { Role, RoleProps } from "reakit";

import { createContext } from "../utils";

import { forwardRefWithAs, PropsWithAs } from "../utils/types";

export type AlertStatus = "success" | "warning" | "error" | "info" | "offline";

type AlertContext = {
  status: AlertStatus;
};

const [AlertProvider, useAlertContext] = createContext<AlertContext>({
  name: "AlertContext",
  errorMessage:
    "useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`",
});

export type AlertProps = RoleProps & {};

function AlertComponent(
  props: PropsWithAs<AlertProps, "div">,
  ref: React.Ref<HTMLDivElement>,
) {
  return <Role ref={ref} {...props} />;
}

export const Alert = forwardRefWithAs<AlertProps, "div">(AlertComponent);

export default Alert;
