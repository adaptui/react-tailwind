import * as React from "react";

import {
  Slider,
  SliderProps,
  SliderStateReturn,
  SliderThumb,
} from "../../index";

export type SliderBasicProps = SliderProps & {};

export const SliderBasic: React.FC<SliderBasicProps> = props => {
  return (
    <Slider aria-label="Slider" {...props}>
      {(state: SliderStateReturn) => {
        return <SliderThumb index={0} sliderState={state} aria-label="Thumb" />;
      }}
    </Slider>
  );
};

export default SliderBasic;
