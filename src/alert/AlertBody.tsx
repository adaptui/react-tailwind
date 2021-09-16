import { twMerge as cx } from "tailwind-merge";

import { useTheme } from "../index";
import { Box, BoxProps } from "../box";
import { useAlertContext } from "./Alert";
import { forwardRefWithAs } from "../utils/types";

export type AlertBodyProps = BoxProps & {};

export const AlertBody = forwardRefWithAs<
  AlertBodyProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const { isTablet } = useAlertContext();

  const theme = useTheme();
  const alertBodyStyles = cx(
    theme.alert.body.base,
    isTablet ? theme.alert.body.mobile : theme.alert.body.desktop,
    className,
  );

  return <Box className={alertBodyStyles} ref={ref} {...rest} />;
});

AlertBody.displayName = "AlertBody";
