import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useSafeLayoutEffect } from "../hooks";
import { forwardRefWithAs } from "../utils/types";
import { useFormFieldContext } from "./FormField";

type FormHelperTextProps = BoxProps & {};

export const FormHelperText = forwardRefWithAs<
  FormHelperTextProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { id, children, className, ...rest } = props;
  const { helpTextId, setHasHelpText } = useFormFieldContext();
  const theme = useTheme();
  const helperStyles = cx(theme.formField.helperText, className);

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
