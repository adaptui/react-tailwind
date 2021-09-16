import { twMerge as cx } from "tailwind-merge";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

type FormLabelValueProps = BoxProps & {};

export const FormLabelValue = forwardRefWithAs<
  FormLabelValueProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { children, className, ...rest } = props;

  const theme = useTheme();
  const labelValueStyles = cx(theme.formField.labelValueText, className);

  return (
    <Box ref={ref} className={labelValueStyles} {...rest}>
      {children}
    </Box>
  );
});
