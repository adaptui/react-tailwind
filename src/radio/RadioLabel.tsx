import React from "react";
import { BoxProps } from "reakit";
import { cx } from "@renderlesskit/react";

import { Box } from "../box";
import { useTheme } from "../index";
import { useRadioProps, useRadioStateContext } from "./Radio";
import { forwardRefWithAs } from "../utils/types";

export type RadioLabelProps = BoxProps & {};

export const RadioLabel = forwardRefWithAs<
  RadioLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { className, ...rest } = props;
  const { size = "md", disabled } = useRadioProps();
  const { isDisabled } = useRadioStateContext();

  const theme = useTheme();
  // const radioStyles = cx(
  //   theme.radio.base,
  //   theme.radio.field.text.base,
  //   theme.radio.field.text.size[size],
  //   disabled ? theme.radio.disabled : "",
  //   className,
  // );
  const radioLabelStyles = cx(
    theme.radio.base,
    disabled || isDisabled ? theme.radio.disabled : "",
    className,
  );

  return <Box as="label" ref={ref} className={radioLabelStyles} {...rest} />;
});

RadioLabel.displayName = "RadioLabel";
