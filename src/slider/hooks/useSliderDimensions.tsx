import React from "react";

export const useSliderDimensions = () => {
  const thumbRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const thumbSize = React.useRef({ width: 0, height: 0 });
  const trackHeight = React.useRef({ height: 0 });
  const padding = thumbSize.current.height / 2 - trackHeight.current.height / 2;

  React.useLayoutEffect(() => {
    if (thumbRef.current) {
      const dimension = thumbRef?.current?.getBoundingClientRect();
      thumbSize.current.width = dimension.width;
      thumbSize.current.height = dimension.height;
    }
  }, [thumbRef]);

  React.useLayoutEffect(() => {
    if (trackRef.current) {
      const dimension = trackRef?.current?.getBoundingClientRect();
      trackHeight.current.height = dimension.height;
    }
  }, [trackRef]);

  return { thumbRef, trackRef, padding, thumbSize };
};
