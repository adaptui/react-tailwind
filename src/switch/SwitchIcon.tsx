import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { SwitchStateProps, useSwitchState, useSwitchTheme } from "./Switch";

export type SwitchIconProps = BoxProps & SwitchStateProps;

export const SwitchIcon = forwardRefWithAs<
  SwitchIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { className, state, size, children, ...rest } = props;
  const switchState = useSwitchState();
  const switchTheme = useSwitchTheme();
  const _state = state || switchState || {};
  const _size = size || switchTheme.size || "sm";

  const theme = useTheme();
  const switchIconWrapperStyles = cx(
    theme.switch.icon.wrapper.base,
    theme.switch.icon.wrapper.size[_size],
    _state?.state
      ? theme.switch.icon.wrapper.checked
      : theme.switch.icon.wrapper.unchecked,
    className,
  );
  const switchIconContentStyles = cx(
    theme.switch.icon.content.base,
    theme.switch.icon.content.size[_size],
    _state?.state
      ? theme.switch.icon.content.checked[_size]
      : theme.switch.icon.content.unchecked,
  );

  return (
    <Box
      as="span"
      className={switchIconWrapperStyles}
      ref={ref}
      aria-hidden="true"
      role="img"
      {...rest}
    >
      {children ? (
        children
      ) : (
        <Box as="span" className={switchIconContentStyles} />
      )}
    </Box>
  );
});
