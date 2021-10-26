import { Box, BoxProps } from "../box";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InfoCircleIcon,
} from "../icons";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { useAlertContext } from "./Alert";

const STATUS_ICONS = {
  neutral: InfoCircleIcon,
  info: InfoCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: InfoCircleIcon,
};

export type AlertIconProps = BoxProps;

export const AlertIcon = forwardRefWithAs<
  AlertIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { status } = useAlertContext();
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
