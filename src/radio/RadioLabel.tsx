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
  const { disabled } = useRadioProps();
  const { isDisabled } = useRadioStateContext();

  const theme = useTheme();

  const radioLabelStyles = cx(
    theme.radio.base,
    disabled || isDisabled ? theme.radio.disabled : "",
    className,
  );

  return <Box as="label" ref={ref} className={radioLabelStyles} {...rest} />;
});

RadioLabel.displayName = "RadioLabel";
