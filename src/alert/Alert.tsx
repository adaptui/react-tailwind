import * as React from "react";
import { Role, RoleProps } from "reakit";
import { cx } from "@renderlesskit/react";

import {
  BoltIcon,
  InfoCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from "../icons";
import { useTheme } from "../theme";
import { createContext } from "../utils";
import { Button, ButtonProps } from "../button";
import { forwardRefWithAs } from "../utils/types";

const STATUS_ICONS = {
  info: InfoCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: ExclamationCircleIcon,
  offline: BoltIcon,
};

export type AlertStatus = keyof Renderlesskit.GetThemeValue<"alert", "status">;

type AlertContext = {
  status: AlertStatus;
};

const [AlertProvider, useAlertContext] = createContext<AlertContext>({
  name: "AlertContext",
  errorMessage:
    "useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`",
});

export type AlertProps = RoleProps & {
  /**
   * The status of the alert
   */
  status?: AlertStatus;
};

export const Alert = forwardRefWithAs<AlertProps, HTMLDivElement, "div">(
  (props, ref) => {
    const { status = "info", className, ...rest } = props;
    const theme = useTheme();
    const alertStyles = cx(
      theme.alert.base,
      theme.alert.status[status].base,
      className,
    );

    return (
      <AlertProvider value={{ status }}>
        <Role role="alert" className={alertStyles} ref={ref} {...rest} />
      </AlertProvider>
    );
  },
);

export type AlertTitleProps = RoleProps & {};

export const AlertTitle = forwardRefWithAs<
  AlertTitleProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const alertTitleStyles = cx(theme.alert.title, className);

  return <Role className={alertTitleStyles} ref={ref} {...rest} />;
});

export type AlertDescriptionProps = RoleProps & {};

export const AlertDescription = forwardRefWithAs<
  AlertDescriptionProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const alertDescriptionStyles = cx(theme.alert.description, className);

  return <Role className={alertDescriptionStyles} ref={ref} {...rest} />;
});

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

export type AlertIconProps = RoleProps & {};

export const AlertIcon = forwardRefWithAs<
  AlertIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { status } = useAlertContext();
  const { className, ...rest } = props;
  const Icon = STATUS_ICONS[status];
  const theme = useTheme();
  const alertIconBaseStyles = cx(theme.alert.icon.base, className);
  const alertIconIconsStyles = cx(
    theme.alert.icon.base,
    theme.alert.status[status].icon,
    className,
  );

  return (
    <Role as="span" className={alertIconBaseStyles} ref={ref} {...rest}>
      <Icon className={alertIconIconsStyles} />
    </Role>
  );
});

export default Alert;
