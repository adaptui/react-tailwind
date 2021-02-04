import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { SwitchStateProps } from "./Switch";
import { forwardRefWithAs } from "../utils/types";

export type SwitchLabelProps = BoxProps & SwitchStateProps;

export const SwitchLabel = forwardRefWithAs<
  SwitchLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const switchStyles = cx(theme.switch.label, className);

  return <Box as="label" ref={ref} className={switchStyles} {...rest} />;
});
