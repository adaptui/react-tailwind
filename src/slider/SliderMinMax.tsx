import { Box, BoxProps } from "../box";
import { useTheme } from "../theme";
import { tcm } from "../utils";
import { forwardRefWithAs } from "../utils/types";

import { useSliderValues } from "./hooks/useSliderValues";
import { useSliderPropsContext } from "./Slider";

export type SliderMinMaxProps = BoxProps & {};

export const SliderMinMax = forwardRefWithAs<
  SliderMinMaxProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const { className, children, ...rest } = props;
  const { orientation = "horizontal", origin = 0 } = useSliderPropsContext();
  const { isReversed } = useSliderValues({
    orientation: orientation,
    origin: origin,
  });

  const theme = useTheme();
  const sliderMinMaxStyles = tcm(
    theme.slider.common.minmax.base,
    isReversed ? theme.slider.common.minmax.reversed : "",
    className,
  );

  return (
    <Box className={sliderMinMaxStyles} ref={ref} {...rest}>
      {children ? (
        children
      ) : (
        <>
          <span>Min</span>
          <span>Max</span>
        </>
      )}
    </Box>
  );
});

SliderMinMax.displayName = "SliderMinMax";
