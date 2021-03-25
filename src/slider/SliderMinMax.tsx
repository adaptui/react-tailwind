import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../index";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { useSliderPropsContext } from "./Slider";
import { useSliderValues } from "./hooks/useSliderValues";

export type SliderMinMaxProps = BoxProps & {};

export const SliderMinMax = forwardRefWithAs<
  SliderMinMaxProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, ...rest } = props;
  const { orientation = "horizontal", origin = 0 } = useSliderPropsContext();
  const { isReversed } = useSliderValues({
    orientation: orientation,
    origin: origin,
  });

  const theme = useTheme();
  const sliderMinMaxStyles = cx(
    theme.slider.common.minmax.base,
    isReversed ? theme.slider.common.minmax.reversed : "",
    className,
  );

  return (
    <Box className={sliderMinMaxStyles} ref={ref} {...rest}>
      <span>Min</span>
      <span>Max</span>
    </Box>
  );
});

SliderMinMax.displayName = "SliderMinMax";
