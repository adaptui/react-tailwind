import React from "react";
import { BoxProps } from "reakit";
import { cx } from "@renderlesskit/react";

import { Box } from "../box";
import { useTheme } from "../index";
import { useRadioGroup } from "./RadioGroup";
import { forwardRefWithAs } from "../utils/types";
import { RadioProps, useRadioContext } from "./Radio";

export type RadioLabelProps = BoxProps & Pick<RadioProps, "disabled">;

export const RadioLabel = forwardRefWithAs<
  RadioLabelProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const { className, ...rest } = props;
  const { size = "md" } = useRadioGroup();
  const { disabled } = useRadioContext();

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
