import * as React from "react";

import { Slider, SliderProps } from "../../index";

export type SliderRangeProps = SliderProps & {};

export const SliderRange: React.FC<SliderRangeProps> = props => {
  return <Slider aria-label="Range Slider" range {...props} />;
};

export default SliderRange;
