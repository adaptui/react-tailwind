import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "..";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type AlertDescriptionProps = BoxProps & {};

export const AlertDescription = forwardRefWithAs<
  AlertDescriptionProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const alertDescriptionStyles = cx(theme.alert.description, className);

  return <Box className={alertDescriptionStyles} ref={ref} {...rest} />;
});

AlertDescription.displayName = "AlertDescription";
