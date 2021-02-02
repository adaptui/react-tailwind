import React from "react";
import {
  cx,
  SliderInput,
  useSliderState,
  SliderStateReturn,
  SliderInitialState,
  SliderTrack as RenderlessSliderTrack,
  SliderThumb as RenderlessSliderThumb,
} from "@renderlesskit/react";
import { VisuallyHidden } from "reakit";

import { useTheme } from "..";
import { createContext, runIfFn } from "../utils";

const percent = (v: number) => `${v}%`;

const [
  SliderStateProvider,
  useSliderContext,
] = createContext<SliderStateReturn>({
  name: "SliderState",
  strict: true,
});

const useSliderValues = (props: SliderProps) => {
  const state = useSliderContext();
  const origin = props.origin || 0;
  const { values, getValuePercent, getThumbPercent } = state;

  const isVertical = props.orientation === "vertical";
  const isRange = values.length === 2;
  const isMulti = values.length > 2;
  const isReversed = state.reversed;

  const trackWidth = !isRange
    ? (getValuePercent(Math.max(values[0], origin)) -
        getValuePercent(Math.min(values[0], origin))) *
      100
    : (getThumbPercent(1) - getThumbPercent(0)) * 100;

  const trackLeft = !isRange
    ? getValuePercent(Math.min(values[0], origin)) * 100
    : getThumbPercent(0) * 100;

  const trackRight = !isRange ? "0px" : percent(getThumbPercent(0) * 100);

  return {
    isVertical,
    isRange,
    isMulti,
    isReversed,
    trackWidth: percent(trackWidth),
    trackLeft: percent(trackLeft),
    trackRight,
    getValuePercent,
    getThumbPercent,
    state,
  };
};

export const SliderTrack: React.FC<SliderProps> = ({
  orientation = "horizontal",
  origin,
  ...props
}) => {
  const theme = useTheme();

  const {
    isVertical,
    isRange,
    isMulti,
    isReversed,
    trackWidth,
    trackLeft,
    trackRight,
    getThumbPercent,
    state,
  } = useSliderValues({ orientation, origin });

  return (
    <RenderlessSliderTrack
      {...state}
      className={cx(
        theme.slider.common.track.base,
        theme.slider[orientation].track.base,
        "top-0",
      )}
    >
      <div
        className={cx(
          theme.slider.common.track.main,
          theme.slider[orientation].track.main,
        )}
      >
        {!isMulti ? (
          <div
            className={cx(
              theme.slider.common.track.filled,
              theme.slider[orientation].track.filled,
            )}
            style={{
              [isVertical ? "height" : "width"]: trackWidth,
              left: !isReversed && !isVertical && trackLeft ? trackLeft : "",
              right: isReversed ? trackRight : "",
              bottom:
                isVertical && isRange ? `${getThumbPercent(0) * 100}%` : "",
            }}
          />
        ) : null}
      </div>
    </RenderlessSliderTrack>
  );
};

export const SliderThumb: React.FC<SliderProps> = ({
  orientation = "horizontal",
  origin,
  children,
}) => {
  const theme = useTheme();

  const { isVertical, isReversed, getThumbPercent, state } = useSliderValues({
    orientation,
    origin,
  });

  return (
    <>
      {[...new Array(state.values.length).keys()].map(index => {
        return (
          <div
            className={cx(
              theme.slider.common.thumb.base,
              theme.slider[orientation].thumb.base,
            )}
            key={`thumb-${index}`}
            style={{
              right: isReversed
                ? `calc(${getThumbPercent(index) * 100}% - 7px)`
                : "",
              left:
                !isReversed && !isVertical
                  ? `calc(${getThumbPercent(index) * 100}% - 7px)`
                  : "",
              bottom: isVertical
                ? `calc(${getThumbPercent(index) * 100}% - 7px)`
                : "",
            }}
          >
            <RenderlessSliderThumb
              {...state}
              index={index}
              className={cx(
                theme.slider.common.thumb.handle,
                theme.slider[orientation].thumb.handle,
              )}
            >
              <VisuallyHidden>
                <SliderInput index={index} {...state} />
              </VisuallyHidden>
              {/* {children} */}
            </RenderlessSliderThumb>
          </div>
        );
      })}
    </>
  );
};

export type SliderProps = SliderInitialState & { origin?: number };
type SliderRenderProps = {
  children?:
    | (({ state }: { state: SliderStateReturn }) => JSX.Element)
    | React.ReactNode;
};

export const Slider: React.FC<SliderProps & SliderRenderProps> = ({
  orientation = "horizontal",
  children,
  origin,
  ...props
}) => {
  const theme = useTheme();
  const state = useSliderState({ ...props, orientation });

  return (
    <SliderStateProvider value={state}>
      {children ? (
        runIfFn(children, { state })
      ) : (
        <div
          className={cx(
            theme.slider.common.wrapper.base,
            theme.slider[orientation].wrapper.base,
          )}
        >
          <SliderTrack origin={origin} orientation={orientation} />
          <SliderThumb origin={origin} orientation={orientation} />
        </div>
      )}
    </SliderStateProvider>
  );
};
