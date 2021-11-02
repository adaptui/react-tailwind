import { Box, BoxProps } from "../box";
import {
  CircledCheckIcon,
  ExclamationTriangleIcon,
  InfoCircleIcon,
} from "../icons";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { AlertContext, useAlertContext } from "./Alert";

const STATUS_ICONS = {
  neutral: InfoCircleIcon,
  info: InfoCircleIcon,
  success: CircledCheckIcon,
  warning: ExclamationTriangleIcon,
  error: InfoCircleIcon,
};

export type AlertIconProps = BoxProps;

export const AlertIcon = forwardRefWithAs<
  AlertIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { status } = useAlertContext() as AlertContext;
  const { className, children, ...rest } = props;
  const Icon = STATUS_ICONS[status];

  const theme = useTheme();
  const alertIconBaseStyles = tcm(
    theme.alert.icon,
    theme.alert.status[status].icon,
    className,
  );

  return (
    <Box as="span" ref={ref} className={alertIconBaseStyles} {...rest}>
      {children ? children : <Icon />}
    </Box>
  );
});

AlertIcon.displayName = "AlertIcon";
