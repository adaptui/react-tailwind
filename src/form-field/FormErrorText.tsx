import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { useFormFieldContext } from "./FormField";
import { useSafeLayoutEffect } from "../hooks";

type FormErrorTextProps = BoxProps & {};

export const FormErrorText = forwardRefWithAs<
  FormErrorTextProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { id, children, className, ...rest } = props;
  const { errorTextId, setHasErrorText, isInvalid } = useFormFieldContext();
  const theme = useTheme();
  const errorStyles = cx(theme.formField.errorText, className);

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
