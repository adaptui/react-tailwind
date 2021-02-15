import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../index";
import { IconButton, IconButtonProps } from "../button";
import { useAlertContext } from "./Alert";
import { forwardRefWithAs } from "../utils/types";

export type AlertCloseButtonProps = IconButtonProps & {};

export const AlertCloseButton = forwardRefWithAs<
  AlertCloseButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const { status } = useAlertContext();
  const { className, ...rest } = props;

  const theme = useTheme();
  const alertCloseButtonStyles = cx(
    theme.alert.closeButton,
    theme.alert.status[status].actionButton,
    className,
  );

  return (
    <IconButton
      variant="ghost"
      className={alertCloseButtonStyles}
      ref={ref}
      {...rest}
    />
  );
});

AlertCloseButton.displayName = "AlertCloseButton";
