import React from "react";
import {
  cx,
  useSliderState,
  SliderStateReturn,
  SliderInitialState,
} from "@renderlesskit/react";

import { useTheme } from "..";
import { Box, BoxProps } from "../box";
import { SliderTrack } from "./SliderTrack";
import { SliderThumb } from "./SliderThumb";
import { forwardRefWithAs, RenderProp } from "../utils/types";
import { createContext, runIfFn } from "../utils";
import { useSliderDimensions } from "./hooks/useSliderDimensions";

const [
  SliderStateProvider,
  useSliderContext,
] = createContext<SliderStateReturn>({
  name: "SliderState",
  strict: true,
});

const [SliderPropsContext, useSliderPropsContext] = createContext<
  Pick<SliderProps, "orientation" | "size" | "origin"> & {
    thumbSize: React.MutableRefObject<{
      width: number;
      height: number;
    }>;
  } & { padding: number }
>({
  name: "SliderProps",
  strict: false,
});

export { useSliderContext, useSliderPropsContext };

export type SliderProps = Omit<BoxProps, "onChange"> &
  SliderInitialState & {
    origin?: number;
    thumbContent?: React.ReactNode | ((value: number[]) => JSX.Element);
    size?: keyof Renderlesskit.GetThemeValue<
      "slider",
      "common"
    >["thumb"]["size"];
  };

type SliderRenderProps = RenderProp<{
  state: SliderStateReturn;
  trackRef: React.RefObject<HTMLDivElement>;
  thumbRef: React.RefObject<HTMLDivElement>;
}>;

export const Slider = forwardRefWithAs<
  SliderProps & SliderRenderProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    orientation = "horizontal",
    thumbContent,
    children,
    origin,
    size = "sm",
    className,
    values,
    min,
    max,
    step,
    isDisabled,
    reversed,
    onChange,
    onChangeEnd,
    onChangeStart,
    formatOptions,
    defaultValues,
    ...rest
  } = props;

  const theme = useTheme();
  const state = useSliderState({ ...props, orientation });
  const { thumbSize, padding, thumbRef, trackRef } = useSliderDimensions();

  const sliderWrapperStyles = cx(
    theme.slider.common.wrapper.base,
    theme.slider[orientation].wrapper.base,
    className,
  );

  const contextProps = React.useMemo(
    () => ({ size, orientation, origin, thumbSize, padding }),
    [size, orientation, origin, thumbSize, padding],
  );

  return (
    <SliderPropsContext value={contextProps}>
      <SliderStateProvider value={state}>
        <Box ref={ref} className={sliderWrapperStyles} {...rest}>
          {children ? (
            runIfFn(children, { state, trackRef, thumbRef })
          ) : (
            <SliderTrack ref={trackRef}>
              <SliderThumb ref={thumbRef}>
                {thumbContent
                  ? runIfFn(thumbContent, state.values)
                  : thumbContent}
              </SliderThumb>
            </SliderTrack>
          )}
        </Box>
      </SliderStateProvider>
    </SliderPropsContext>
  );
});
