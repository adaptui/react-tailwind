import { useRef } from "react";

import { useSafeLayoutEffect } from "../../hooks/useSafeLayoutEffect";

export const useSliderDimensions = () => {
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbSize = useRef({ width: 0, height: 0 });
  const trackHeight = useRef({ height: 0 });
  const padding = thumbSize.current.height / 2 - trackHeight.current.height / 2;

  useSafeLayoutEffect(() => {
    if (thumbRef.current) {
      const dimension = thumbRef?.current?.getBoundingClientRect();
      thumbSize.current.width = dimension.width;
      thumbSize.current.height = dimension.height;
    }
  }, [thumbRef]);

  useSafeLayoutEffect(() => {
    if (trackRef.current) {
      const dimension = trackRef?.current?.getBoundingClientRect();
      trackHeight.current.height = dimension.height;
    }
  }, [trackRef]);

  return { thumbRef, trackRef, padding, thumbSize };
};
