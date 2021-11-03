import { Box, BoxProps } from "../box";
import { useSafeLayoutEffect } from "../hooks";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { FormFieldContextProps, useFormFieldContext } from "./FormField";

type FormHelperTextProps = BoxProps & {};

export const FormHelperText = forwardRefWithAs<
  FormHelperTextProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { id, children, className, ...rest } = props;
  const { helpTextId, setHasHelpText } =
    useFormFieldContext() as FormFieldContextProps;
  const theme = useTheme();
  const helperStyles = tcm(theme.formField.helperText, className);

  useSafeLayoutEffect(() => {
    setHasHelpText.on();
    return () => setHasHelpText.off();
  }, []);

  return (
    <Box id={id || helpTextId} ref={ref} className={helperStyles} {...rest}>
      {children}
    </Box>
  );
});
