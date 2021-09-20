import { tcm } from "../utils";
import { useTheme } from "../theme";
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
  const { isTablet } = useAlertContext();

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
