import { twMerge as cx } from "tailwind-merge";

import {
  InfoCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "../icons";
import { useTheme } from "../index";
import { Box, BoxProps } from "../box";
import { useAlertContext } from "./Alert";
import { forwardRefWithAs } from "../utils/types";

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
  const alertIconBaseStyles = cx(
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
