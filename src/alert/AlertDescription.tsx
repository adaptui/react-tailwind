import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../index";
import { Box, BoxProps } from "../box";
import { useAlertContext } from "./Alert";
import { forwardRefWithAs } from "../utils/types";

export type AlertDescriptionProps = BoxProps & {};

export const AlertDescription = forwardRefWithAs<
  AlertDescriptionProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const { isTablet } = useAlertContext();

  const theme = useTheme();
  const alertDescriptionStyles = cx(
    theme.alert.description.base,
    isTablet ? theme.alert.description.mobile : theme.alert.description.desktop,
    className,
  );

  return <Box className={alertDescriptionStyles} ref={ref} {...rest} />;
});

AlertDescription.displayName = "AlertDescription";
