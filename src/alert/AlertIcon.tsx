import React from "react";

import { useTheme } from "..";
import { Box, BoxProps } from "../box";
import { cx } from "@renderlesskit/react";
import { forwardRefWithAs } from "../utils/types";

import {
  InfoCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "../icons";
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

AlertIcon.displayName = "AlertIcon";