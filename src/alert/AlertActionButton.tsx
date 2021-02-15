import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../index";
import { Button, ButtonProps } from "../button";
import { useAlertContext } from "./Alert";
import { forwardRefWithAs } from "../utils/types";

export type AlertActionButtonProps = ButtonProps & {};

export const AlertActionButton = forwardRefWithAs<
  AlertActionButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const { status } = useAlertContext();
  const { className, ...rest } = props;

  const theme = useTheme();
  const alertActionButtonStyles = cx(
    theme.alert.actionButton,
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
