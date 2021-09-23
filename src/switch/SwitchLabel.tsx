import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { tcm } from "../utils";
import { forwardRefWithAs } from "../utils/types";

export type SwitchLabelProps = BoxProps & {};

export const SwitchLabel = forwardRefWithAs<
  SwitchLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const switchStyles = tcm(theme.switch.label, className);

  return <Box as="label" ref={ref} className={switchStyles} {...rest} />;
});

SwitchLabel.displayName = "SwitchLabel";
