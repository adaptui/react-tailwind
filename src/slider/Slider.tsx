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

const percent = (v: number) => `${v}%`;

const [
  SliderStateProvider,
  useSliderContext,
] = createContext<SliderStateReturn>({
  name: "SliderState",
  strict: true,
});

const [SliderPropsContext, useSliderPropsContext] = createContext<
  Pick<SliderProps, "orientation" | "size" | "origin">
>({
  name: "SliderProps",
  strict: false,
});

export { useSliderContext, useSliderPropsContext };

export const useSliderValues = (props: SliderProps) => {
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

export type SliderProps = SliderInitialState & {
  origin?: number;
  thumbContent?: React.ReactNode | ((value: number[]) => JSX.Element);
  tooltipContent?:
    | React.ReactNode
    | ((state: SliderStateReturn) => JSX.Element);
  tooltipVisible?: boolean;
  size?: keyof Renderlesskit.GetThemeValue<
    "slider",
    "common"
  >["thumb"]["handle"]["size"];
};

type SliderRenderProps = {
  children?:
    | (({ state }: { state: SliderStateReturn }) => JSX.Element)
    | React.ReactNode;
};

export const Slider: React.FC<SliderProps & SliderRenderProps> = ({
  orientation = "horizontal",
  thumbContent,
  children,
  origin,
  size = "sm",
  ...props
}) => {
  const theme = useTheme();
  const state = useSliderState({ ...props, orientation });

  return (
    <SliderStateProvider value={state}>
      <SliderPropsContext value={{ size, orientation, origin }}>
        <div
          className={cx(
            theme.slider.common.wrapper.base,
            theme.slider[orientation].wrapper.base,
          )}
        >
          {children ? (
            runIfFn(children, { state })
          ) : (
            <>
              <SliderTrack />
              <SliderThumb
                tooltipVisible={props.tooltipVisible}
                tooltipContent={props.tooltipContent}
              >
                {thumbContent
                  ? runIfFn(thumbContent, state.values)
                  : thumbContent}
              </SliderThumb>
            </>
          )}
        </div>
      </SliderPropsContext>
    </SliderStateProvider>
  );
};
