import { tcm } from "../utils";
import { useTheme } from "../theme";
import { useAlertContext } from "./Alert";
import { forwardRefWithAs } from "../utils/types";
import { CloseButton, CloseButtonProps } from "../button";

export type AlertCloseButtonProps = CloseButtonProps & {};

export const AlertCloseButton = forwardRefWithAs<
  AlertCloseButtonProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const { status } = useAlertContext();
  const { className, ...rest } = props;

  const theme = useTheme();
  const alertCloseButtonStyles = tcm(
    theme.alert.closeButton,
    theme.alert.status[status].actionButton,
    className,
  );

  return (
    <CloseButton
      variant="ghost"
      className={alertCloseButtonStyles}
      ref={ref}
      {...rest}
    />
  );
});

AlertCloseButton.displayName = "AlertCloseButton";
