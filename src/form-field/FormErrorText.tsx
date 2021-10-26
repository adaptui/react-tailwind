import { Box, BoxProps } from "../box";
import { useSafeLayoutEffect } from "../hooks";
import { useTheme } from "../theme";
import { forwardRefWithAs, tcm } from "../utils";

import { useFormFieldContext } from "./FormField";

type FormErrorTextProps = BoxProps & {};

export const FormErrorText = forwardRefWithAs<
  FormErrorTextProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { id, children, className, ...rest } = props;
  const { errorTextId, setHasErrorText, isInvalid } = useFormFieldContext();
  const theme = useTheme();
  const errorStyles = tcm(theme.formField.errorText, className);

  useSafeLayoutEffect(() => {
    setHasErrorText.on();
    return () => setHasErrorText.off();
  }, []);

  return isInvalid ? (
    <Box
      aria-live="polite"
      ref={ref}
      id={id || errorTextId}
      className={errorStyles}
      {...rest}
    >
      {children}
    </Box>
  ) : null;
});
