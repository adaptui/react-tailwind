import React from "react";

import { Button, ButtonProps, useTheme } from "..";
import { cx } from "@renderlesskit/react";
import { forwardRefWithAs } from "../utils/types";
import { useAlertContext } from "./Alert";

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

  return <Button className={alertActionButtonStyles} ref={ref} {...rest} />;
});

AlertActionButton.displayName = "AlertActionButton";
