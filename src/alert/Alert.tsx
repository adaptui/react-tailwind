import * as React from "react";
import { cx } from "@renderlesskit/react";

import {
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertActionButton,
} from "./index";
import { useTheme } from "../theme";
import { CloseIcon } from "../icons";
import { Box, BoxProps } from "../box";
import { AlertBody } from "./AlertBody";
import { useMediaQuery } from "../hooks";
import { AlertActions } from "./AlertActions";
import { createContext, runIfFn } from "../utils";
import { AlertCloseButton } from "./AlertCloseButton";
import { forwardRefWithAs, RenderProp } from "../utils/types";

export type AlertStatus = keyof Renderlesskit.GetThemeValue<"alert", "status">;

export type AlertContext = { status: AlertStatus; isMobile: boolean };

const [AlertProvider, useAlertContext] = createContext<AlertContext>({
  name: "AlertContext",
  errorMessage:
    "useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`",
});

export { AlertProvider, useAlertContext };

type AlertRenderProps = RenderProp<{
  status: AlertStatus;
  isMobile: boolean;
  styles: Renderlesskit.Theme["components"]["alert"];
}>;

export type AlertProps = BoxProps &
  AlertRenderProps & {
    /**
     * The status of the alert
     */
    status?: AlertStatus;
    /**
     * button action icon
     */
    icon?: React.ReactNode;
    /**
     * Action button label
     */
    actionButtonLabel?: string;
    /**
     * Title of the alert
     */
    title?: string;
    /**
     * Description of the alert
     */
    description?: string;
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
      closableIcon = <CloseIcon />,
      onClose,
      className,
      children,
      ...rest
    } = props;
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    const context = { status, isMobile };

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
            runIfFn(children, { isMobile, status, styles: theme.alert })
          ) : (
            <>
              <AlertIcon>{icon}</AlertIcon>
              <AlertBody>
                <AlertTitle>{title}</AlertTitle>
                {description && (
                  <AlertDescription>{description}</AlertDescription>
                )}
                <Box as="span" style={{ display: "inherit" }}>
                  {isMobile ? Action : null}
                </Box>
              </AlertBody>
              <AlertActions>
                {!isMobile ? Action : null}
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
