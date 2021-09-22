import { Button, ButtonProps } from "../button";
import { useTheme } from "../theme";
import { tcm } from "../utils";
import { forwardRefWithAs } from "../utils/types";

import { useAlertContext } from "./Alert";

export type AlertActionButtonProps = ButtonProps & {};

export const AlertActionButton = forwardRefWithAs<
  AlertActionButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const { status, isTablet } = useAlertContext();
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
