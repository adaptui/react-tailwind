import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { tcm } from "../utils";
import { forwardRefWithAs } from "../utils/types";

import { useAlertContext } from "./Alert";

export type AlertBodyProps = BoxProps & {};

export const AlertBody = forwardRefWithAs<
  AlertBodyProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const { isTablet } = useAlertContext();

  const theme = useTheme();
  const alertBodyStyles = tcm(
    theme.alert.body.base,
    isTablet ? theme.alert.body.mobile : theme.alert.body.desktop,
    className,
  );

  return <Box className={alertBodyStyles} ref={ref} {...rest} />;
});

AlertBody.displayName = "AlertBody";
