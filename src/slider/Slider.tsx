import React from "react";
import {
  SliderTrack as RenderlessSliderTrack,
  SliderThumb as RenderlessSliderThumb,
  SliderInput,
  useSliderState,
  SliderInitialState,
  SliderStateReturn,
} from "@renderlesskit/react";
import { VisuallyHidden } from "reakit";

import { useTheme } from "..";
import { createContext } from "../utils";

const [
  SliderStateProvider,
  useSliderContext,
] = createContext<SliderStateReturn>({
  name: "SliderState",
  strict: true,
});

export const SliderTrack = () => {
  const theme = useTheme();
  const state = useSliderContext();

  return (
    <RenderlessSliderTrack {...state} className={theme.slider.track.base}>
      <div className={theme.slider.track.main} />
      <div
        className={theme.slider.track.filled}
        data-percent={`${state.getValuePercent(state.values[0]) * 100}%`}
        style={{ width: `${state.getValuePercent(state.values[0]) * 100}%` }}
      />
    </RenderlessSliderTrack>
  );
};

export const SliderThumb: React.FC = ({ children }) => {
  const theme = useTheme();
  const state = useSliderContext();

  return (
    <div
      className={theme.slider.thumb.base}
      data-percent={`${state.getThumbPercent(0) * 100}%`}
      style={{ left: `calc(${state.getThumbPercent(0) * 100}% - 7px)` }}
    >
      <RenderlessSliderThumb
        {...state}
        index={0}
        className={theme.slider.thumb.handle}
      >
        {children}
      </RenderlessSliderThumb>
    </div>
  );
};

export const Slider: React.FC<SliderInitialState> = props => {
  const theme = useTheme();
  const state = useSliderState(props);

  return (
    <SliderStateProvider value={state}>
      <div className={theme.slider.wrapper}>
        <SliderTrack />
        <SliderThumb>
          <VisuallyHidden>
            <SliderInput index={0} {...state} />
          </VisuallyHidden>
        </SliderThumb>
      </div>
    </SliderStateProvider>
  );
};
