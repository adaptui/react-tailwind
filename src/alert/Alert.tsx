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

/**
 * Utility function to refactor out redundant components,
 * we can remove this later if use cases differ in future to avoid wrong abstraction
 *
 * @param styleToken theme token name accessing theme.alert[styleToken]
 * @param displayName sets displayName of the component
 */
export const createComponent = <Props extends { className?: string }>(
  styleToken: string,
  displayName: string,
) => {
  const Comp = forwardRefWithAs<Props, HTMLDivElement, "div">((props, ref) => {
    const { className, ...rest } = props;
    const theme = useTheme();
    const styles = cx(theme.alert[styleToken], className);

    return <Box className={styles} ref={ref} {...rest} />;
  });

  Comp.displayName = displayName;

  return Comp;
};

export default Alert;
