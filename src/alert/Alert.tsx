import * as React from "react";
import { cx } from "@renderlesskit/react";

import {
  BoltIcon,
  InfoCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  CloseIcon,
} from "../icons";
import { useTheme } from "../theme";
import { forwardRefWithAs } from "../utils/types";
import { createContext, runIfFn } from "../utils";
import { Button, ButtonProps, IconButton } from "../button";
import { Box, BoxProps } from "../box";

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

export type AlertProps = BoxProps & {
  /**
   * The status of the alert
   */
  status?: AlertStatus;
  /**
   * button action icon
   */
  icon?: React.ReactNode;
  actionButtonLabel?: string;
  title?: string;
  description?: string;
};

type AlertRenderProps = {
  children?:
    | React.ReactNode
    | (({
        status,
        styles,
      }: {
        status: AlertStatus;
        styles: Renderlesskit.Theme["components"]["alert"];
      }) => JSX.Element);
};

export const Alert = forwardRefWithAs<
  AlertProps & AlertRenderProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    title,
    description,
    actionButtonLabel,
    status = "info",
    icon = <CloseIcon />,
    className,
    children,
    ...rest
  } = props;
  const theme = useTheme();
  const alertStyles = cx(
    theme.alert.base,
    theme.alert.status[status].base,
    className,
  );

  return (
    <AlertProvider value={{ status }}>
      <Box role="alert" className={alertStyles} ref={ref} {...rest}>
        {children ? (
          runIfFn(children, { status, styles: theme.alert })
        ) : (
          <>
            <AlertTitle>
              <AlertIcon />
              {title}
            </AlertTitle>
            {description && <AlertDescription>{description}</AlertDescription>}
            <AlertActions>
              {actionButtonLabel && (
                <AlertActionButton as="div">
                  {actionButtonLabel}
                </AlertActionButton>
              )}
              <IconButton
                aria-label="close"
                className={cx(
                  theme.alert.iconButton.base,
                  theme.alert.status[status].iconButton,
                )}
              >
                {icon}
              </IconButton>
            </AlertActions>
          </>
        )}
      </Box>
    </AlertProvider>
  );
});

export type AlertTitleProps = BoxProps & {};

export const AlertTitle = forwardRefWithAs<
  AlertTitleProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const alertTitleStyles = cx(theme.alert.title, className);

  return <Box className={alertTitleStyles} ref={ref} {...rest} />;
});

export type AlertDescriptionProps = BoxProps & {};

export const AlertDescription = forwardRefWithAs<
  AlertDescriptionProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const alertDescriptionStyles = cx(theme.alert.description, className);

  return <Box className={alertDescriptionStyles} ref={ref} {...rest} />;
});

export type AlertActionsProps = BoxProps & {};

export const AlertActions = forwardRefWithAs<
  AlertActionsProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const alertActionsStyles = cx(theme.alert.actionsWrapper, className);

  return <Box className={alertActionsStyles} ref={ref} {...rest} />;
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

export type AlertIconProps = BoxProps;

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
    theme.alert.icon.icons,
    theme.alert.status[status].icon,
    className,
  );

  return (
    <Box as="span" ref={ref} className={alertIconBaseStyles} {...rest}>
      <Icon className={alertIconIconsStyles} />
    </Box>
  );
});

export default Alert;
