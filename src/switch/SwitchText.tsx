import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useSwitchContext } from "./Switch";
import { forwardRefWithAs } from "../utils/types";

export type SwitchTextProps = BoxProps & {};

export const SwitchText = forwardRefWithAs<
  SwitchTextProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { className, as = "span", ...rest } = props;
  const { size = "md" } = useSwitchContext();

  const theme = useTheme();
  const switchLabelStyles = cx(
    theme.switch.labelText.base,
    theme.switch.labelText.size[size],
    className,
  );

  return <Box as={as} className={switchLabelStyles} ref={ref} {...rest} />;
});

SwitchText.displayName = "SwitchText";
