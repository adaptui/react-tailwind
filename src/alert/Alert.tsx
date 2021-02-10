import * as React from "react";
import { cx } from "@renderlesskit/react";

import { CloseIcon } from "../icons";
import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { createContext, runIfFn } from "../utils";
import { IconButton } from "../button";
import { forwardRefWithAs, RenderProp } from "../utils/types";
import {
  AlertIcon,
  AlertTitle,
  AlertActions,
  AlertDescription,
  AlertActionButton,
} from ".";

export type AlertStatus = keyof Renderlesskit.GetThemeValue<"alert", "status">;

type AlertContext = {
  status: AlertStatus;
};

const [AlertProvider, useAlertContext] = createContext<AlertContext>({
  name: "AlertContext",
  errorMessage:
    "useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`",
});

export { AlertProvider, useAlertContext };

export type AlertProps = BoxProps & {
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
};

type AlertRenderProps = RenderProp<{
  status: AlertStatus;
  styles: Renderlesskit.Theme["components"]["alert"];
}>;

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

Alert.displayName = "Alert";

export default Alert;
