import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { useAlertContext } from "./Alert";

export type AlertDescriptionProps = BoxProps & {};

export const AlertDescription = forwardRefWithAs<
  AlertDescriptionProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const { isTablet } = useAlertContext();

  const theme = useTheme();
  const alertDescriptionStyles = tcm(
    theme.alert.description.base,
    isTablet ? theme.alert.description.mobile : theme.alert.description.desktop,
    className,
  );

  return <Box className={alertDescriptionStyles} ref={ref} {...rest} />;
});

AlertDescription.displayName = "AlertDescription";
