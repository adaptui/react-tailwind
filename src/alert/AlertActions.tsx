import { BoxProps } from "../box";
import { createComponent } from "./Alert";

export type AlertActionsProps = BoxProps & {};

export const AlertActions = createComponent<AlertActionsProps>(
  "actionsWrapper",
  "AlertActions",
);
