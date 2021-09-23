import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { tcm } from "../utils";
import { forwardRefWithAs } from "../utils/types";

import { useSwitchContext } from "./Switch";

export type SwitchTextProps = BoxProps & {};

export const SwitchText = forwardRefWithAs<
  SwitchTextProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { className, as = "span", ...rest } = props;
  const { size = "md" } = useSwitchContext();

  const theme = useTheme();
  const switchLabelStyles = tcm(
    theme.switch.labelText.base,
    theme.switch.labelText.size[size],
    className,
  );

  return <Box as={as} className={switchLabelStyles} ref={ref} {...rest} />;
});

SwitchText.displayName = "SwitchText";
