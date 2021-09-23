import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { tcm } from "../utils";
import { forwardRefWithAs } from "../utils/types";

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
