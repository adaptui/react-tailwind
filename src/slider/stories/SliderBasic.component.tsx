import * as React from "react";

import { Slider, SliderProps } from "../../index";

export type SliderBasicProps = SliderProps & {};

export const SliderBasic: React.FC<SliderBasicProps> = props => {
  return <Slider aria-label="Slider" {...props} />;
};

export default SliderBasic;
