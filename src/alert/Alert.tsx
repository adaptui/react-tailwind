import * as React from "react";
import { twMerge as cx } from "tailwind-merge";

import {
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertActionButton,
} from "./index";
import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { AlertBody } from "./AlertBody";
import { useMediaQuery } from "../hooks";
import { AlertActions } from "./AlertActions";
import { createContext, runIfFn } from "../utils";
import { AlertCloseButton } from "./AlertCloseButton";
import { forwardRefWithAs, RenderProp } from "../utils/types";

export type AlertStatus = keyof Renderlesskit.GetThemeValue<"alert", "status">;

export type AlertContext = { status: AlertStatus; isTablet: boolean };

const [AlertProvider, useAlertContext] = createContext<AlertContext>({
  name: "AlertContext",
  errorMessage:
    "useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`",
});

export { AlertProvider, useAlertContext };

type AlertRenderProps = RenderProp<{
  status: AlertStatus;
  styles: Renderlesskit.Theme["components"]["alert"];
}>;

export type AlertProps = BoxProps &
  AlertRenderProps & {
    /**
     * The status of the alert
     *
     * @default info
     */
    status?: AlertStatus;
    /**
     * Title of the alert
     */
    title?: string;
    /**
     * Description of the alert
     */
    description?: string;
    /**
     * Action button label
     */
    actionButtonLabel?: string;
    /**
     * Button action icon
     */
    icon?: React.ReactNode;
    /**
     * Is Alert closable?
     *
     * @default false
     */
    closable?: boolean;
    /**
     * If added, Alert will show this icon as closable instead of the default `Close` icon.
     */
    closableIcon?: React.ReactElement;
    /**
     * Callback to fire when close icon is clicked?
     */
    onClose?: (e?: React.MouseEvent) => void;
  };

export const Alert = forwardRefWithAs<AlertProps, HTMLDivElement, "div">(
  (props, ref) => {
    const {
      title,
      description,
      actionButtonLabel,
      status = "info",
      icon,
      closable,
      closableIcon,
      onClose,
      className,
      children,
      ...rest
    } = props;
    const [isTablet] = useMediaQuery("(max-width: 768px)");
    const context = { status, isTablet };

    const theme = useTheme();
    const alertStyles = cx(
      theme.alert.base,
      theme.alert.status[status].base,
      className,
    );

    const Action = actionButtonLabel && (
      <AlertActionButton>{actionButtonLabel}</AlertActionButton>
    );

    return (
      <AlertProvider value={context}>
        <Box role="alert" className={alertStyles} ref={ref} {...rest}>
          {children ? (
            runIfFn(children, { status, styles: theme.alert })
          ) : (
            <>
              <AlertIcon>{icon}</AlertIcon>
              <AlertBody>
                <AlertTitle>{title}</AlertTitle>
                {description && (
                  <AlertDescription>{description}</AlertDescription>
                )}
                <Box as="span" style={{ display: "inline-flex" }}>
                  {isTablet ? Action : null}
                </Box>
              </AlertBody>
              <AlertActions>
                {!isTablet ? Action : null}
                {closable && (
                  <AlertCloseButton onClick={onClose}>
                    {closableIcon}
                  </AlertCloseButton>
                )}
              </AlertActions>
            </>
          )}
        </Box>
      </AlertProvider>
    );
  },
);

Alert.displayName = "Alert";

export default Alert;
