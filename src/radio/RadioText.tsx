import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useRadioProps } from "./Radio";
import { forwardRefWithAs } from "../utils/types";

export type RadioTextProps = BoxProps & {};

export const RadioText = forwardRefWithAs<
  RadioTextProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const { size = "md" } = useRadioProps();

  const theme = useTheme();
  const radioTextStyles = cx(
    theme.radio.field.text.base,
    theme.radio.field.text.size[size],
    className,
  );

  return <Box className={radioTextStyles} ref={ref} {...rest} />;
});

RadioText.displayName = "RadioText";
