import React from "react";
import { BoxProps } from "reakit";
import { cx } from "@renderlesskit/react";

import { Box } from "../box";
import { useTheme } from "../index";
import { useRadioProps } from "./Radio";
import { forwardRefWithAs } from "../utils/types";

export type RadioLabelProps = BoxProps & {};

export const RadioLabel = forwardRefWithAs<
  RadioLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { className, ...rest } = props;
  const { size = "md", disabled } = useRadioProps();

  const theme = useTheme();
  const radioStyles = cx(
    theme.radio.base,
    theme.radio.label.base,
    theme.radio.label.size[size],
    disabled ? theme.radio.disabled : "",
    className,
  );

  return <Box as="label" ref={ref} className={radioStyles} {...rest} />;
});

RadioLabel.displayName = "RadioLabel";
