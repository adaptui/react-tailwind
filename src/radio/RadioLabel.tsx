import { cx } from "@renderlesskit/react";
import React from "react";
import { BoxProps } from "reakit";
import { useTheme } from "..";
import { Box } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type RadioLabelProps = BoxProps & {
  disabled?: boolean;
  size?: keyof Renderlesskit.GetThemeValue<"radio", "icon">["size"];
};

export const RadioLabel = forwardRefWithAs<
  RadioLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { disabled = false, ...mainProps } = props;
  const { className, ...rest } = mainProps;
  const theme = useTheme();
  const radioStyles = cx(
    theme.radio.base,
    disabled ? theme.radio.disabled : "",
    className,
  );

  return <Box as="label" ref={ref} className={radioStyles} {...rest} />;
});
