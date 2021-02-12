import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "..";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type AlertActionsProps = BoxProps & {};

export const AlertActions = forwardRefWithAs<
  AlertActionsProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const alertActionsStyles = cx(theme.alert.actionsWrapper, className);

  return <Box className={alertActionsStyles} ref={ref} {...rest} />;
});

AlertActions.displayName = "AlertActions";
