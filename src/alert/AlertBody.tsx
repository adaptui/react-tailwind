import React from "react";

import { useTheme } from "..";
import { cx } from "@renderlesskit/react";
import { forwardRefWithAs } from "../utils/types";
import { Box, BoxProps } from "../box";

export type AlertBodyProps = BoxProps & {};

export const AlertBody = forwardRefWithAs<
  AlertBodyProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const alertBodyStyles = cx(theme.alert.body, className);

  return <Box className={alertBodyStyles} ref={ref} {...rest} />;
});

AlertBody.displayName = "AlertBody";
