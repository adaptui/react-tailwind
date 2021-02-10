import React from "react";

import { useTheme } from "..";
import { Box, BoxProps } from "../box";
import { cx } from "@renderlesskit/react";
import { forwardRefWithAs } from "../utils/types";

export type AlertTitleProps = BoxProps & {};

export const AlertTitle = forwardRefWithAs<
  AlertTitleProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const alertTitleStyles = cx(theme.alert.title, className);

  return <Box className={alertTitleStyles} ref={ref} {...rest} />;
});

AlertTitle.displayName = "AlertTitle";
