import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../index";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type SliderMinMaxProps = BoxProps & {};

export const SliderMinMax = forwardRefWithAs<
  SliderMinMaxProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const sliderMinMaxStyles = cx(theme.slider.common.minmax, className);

  return (
    <Box className={sliderMinMaxStyles} ref={ref} {...rest}>
      <span>Min</span>
      <span>Max</span>
    </Box>
  );
});

SliderMinMax.displayName = "SliderMinMax";
