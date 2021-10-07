import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

type FormLabelValueProps = BoxProps & {};

export const FormLabelValue = forwardRefWithAs<
  FormLabelValueProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { children, className, ...rest } = props;

  const theme = useTheme();
  const labelValueStyles = tcm(theme.formField.labelValueText, className);

  return (
    <Box ref={ref} className={labelValueStyles} {...rest}>
      {children}
    </Box>
  );
});
