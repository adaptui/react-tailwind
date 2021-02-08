import React from "react";
import {
  cx,
  useSliderState,
  SliderStateReturn,
  SliderInitialState,
} from "@renderlesskit/react";

import { useTheme } from "..";
import { createContext, runIfFn } from "../utils";
import { SliderTrack } from "./SliderTrack";
import { SliderThumb } from "./SliderThumb";
import { Box } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { useSliderDimensions } from "./hooks/useSliderDimensions";

export const percent = (v: number) => `${v}%`;

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

export type SliderProps = SliderInitialState & {
  origin?: number;
  thumbContent?: React.ReactNode | ((value: number[]) => JSX.Element);
  size?: keyof Renderlesskit.GetThemeValue<"slider", "common">["thumb"]["size"];
};

type SliderRenderProps = {
  children?:
    | (({
        state,
        trackRef,
        thumbRef,
      }: {
        state: SliderStateReturn;
        trackRef: React.RefObject<HTMLDivElement>;
        thumbRef: React.RefObject<HTMLDivElement>;
      }) => JSX.Element)
    | React.ReactNode;
};

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
        <Box ref={ref} className={sliderWrapperStyles}>
          {children ? (
            runIfFn(children, { state, trackRef, thumbRef })
          ) : (
            <>
              <SliderTrack ref={trackRef}>
                <SliderThumb ref={thumbRef}>
                  {thumbContent
                    ? runIfFn(thumbContent, state.values)
                    : thumbContent}
                </SliderThumb>
              </SliderTrack>
            </>
          )}
        </Box>
      </SliderStateProvider>
    </SliderPropsContext>
  );
});
