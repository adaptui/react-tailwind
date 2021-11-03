import { Button, ButtonProps } from "../button";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { AlertContext, useAlertContext } from "./Alert";

export type AlertActionButtonProps = ButtonProps & {};

export const AlertActionButton = forwardRefWithAs<
  AlertActionButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const { status, isTablet } = useAlertContext() as AlertContext;
  const { className, ...rest } = props;

  const theme = useTheme();
  const alertActionButtonStyles = tcm(
    theme.alert.actionButton.base,
    isTablet
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
