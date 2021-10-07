import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { useFormFieldContext } from "./FormField";

type FormRequiredTextProps = BoxProps & {};

export const FormRequiredText = forwardRefWithAs<
  FormRequiredTextProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { children, className, ...rest } = props;
  const { isRequired } = useFormFieldContext();

  const theme = useTheme();
  const requiredStyles = tcm(theme.formField.requiredText, className);

  return isRequired ? (
    <Box ref={ref} className={requiredStyles} aria-hidden={true} {...rest}>
      {children}
    </Box>
  ) : null;
});
