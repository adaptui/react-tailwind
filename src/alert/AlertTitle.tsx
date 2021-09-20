import { tcm } from "../utils";
import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type AlertTitleProps = BoxProps & {};

export const AlertTitle = forwardRefWithAs<
  AlertTitleProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const alertTitleStyles = tcm(theme.alert.title, className);

  return <Box className={alertTitleStyles} ref={ref} {...rest} />;
});

AlertTitle.displayName = "AlertTitle";
