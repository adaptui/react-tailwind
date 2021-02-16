import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../index";
import { useAlertContext } from "./Alert";
import { Button, ButtonProps } from "../button";
import { forwardRefWithAs } from "../utils/types";

export type AlertActionButtonProps = ButtonProps & {};

export const AlertActionButton = forwardRefWithAs<
  AlertActionButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const { status, isMobile } = useAlertContext();
  const { className, ...rest } = props;

  const theme = useTheme();
  const alertActionButtonStyles = cx(
    theme.alert.actionButton.base,
    isMobile
      ? theme.alert.actionButton.mobile
      : theme.alert.actionButton.desktop,
    theme.alert.status[status].actionButton,
    className,
  );

  return (
    <Button
      variant="ghost"
      className={alertActionButtonStyles}
      ref={ref}
      {...rest}
    />
  );
});

AlertActionButton.displayName = "AlertActionButton";
