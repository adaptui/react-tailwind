import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { AlertContext, useAlertContext } from "./Alert";

export type AlertActionsProps = BoxProps & {};

export const AlertActions = forwardRefWithAs<
  AlertActionsProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const { isTablet } = useAlertContext() as AlertContext;

  const theme = useTheme();
  const alertActionsStyles = tcm(
    theme.alert.actionsWrapper.base,
    isTablet
      ? theme.alert.actionsWrapper.mobile
      : theme.alert.actionsWrapper.desktop,
    className,
  );

  return <Box className={alertActionsStyles} ref={ref} {...rest} />;
});

AlertActions.displayName = "AlertActions";
