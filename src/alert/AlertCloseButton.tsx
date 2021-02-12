import React from "react";

import { Button, ButtonProps, useTheme } from "..";
import { cx } from "@renderlesskit/react";
import { forwardRefWithAs } from "../utils/types";
import { useAlertContext } from "./Alert";

export type AlertCloseButtonProps = ButtonProps & {};

export const AlertCloseButton = forwardRefWithAs<
  AlertCloseButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const { status } = useAlertContext();
  const { className, ...rest } = props;
  const theme = useTheme();
  const alertCloseButtonStyles = cx(
    theme.alert.actionButton,
    theme.alert.status[status].actionButton,
    className,
  );

  return (
    <Button size="sm" className={alertCloseButtonStyles} ref={ref} {...rest} />
  );
});

AlertCloseButton.displayName = "AlertCloseButton";
