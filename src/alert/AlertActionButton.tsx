import React from "react";

import { useTheme } from "..";
import { cx } from "@renderlesskit/react";
import { forwardRefWithAs } from "../utils/types";
import { useAlertContext } from "./Alert";
import { Box, BoxProps } from "../box";

export type AlertActionButtonProps = BoxProps & {};

export const AlertActionButton = forwardRefWithAs<
  AlertActionButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const { status } = useAlertContext();
  const { className, ...rest } = props;
  const theme = useTheme();
  const alertActionButtonStyles = cx(
    theme.button.base,
    theme.alert.actionButton,
    theme.alert.status[status].actionButton,
    className,
  );

  return (
    <Box as="button" className={alertActionButtonStyles} ref={ref} {...rest} />
  );
});

AlertActionButton.displayName = "AlertActionButton";
