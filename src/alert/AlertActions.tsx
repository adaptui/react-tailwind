import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "..";
import { Box, BoxProps } from "../box";
import { useAlertContext } from "./Alert";
import { forwardRefWithAs } from "../utils/types";

export type AlertActionsProps = BoxProps & {};

export const AlertActions = forwardRefWithAs<
  AlertActionsProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const { isMobile } = useAlertContext();

  const theme = useTheme();
  const alertActionsStyles = cx(
    theme.alert.actionsWrapper.base,
    isMobile ? "" : theme.alert.actionsWrapper.desktop,
    className,
  );

  return <Box className={alertActionsStyles} ref={ref} {...rest} />;
});

AlertActions.displayName = "AlertActions";
