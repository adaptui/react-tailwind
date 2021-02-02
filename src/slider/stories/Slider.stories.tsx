import React from "react";
import { Meta } from "@storybook/react";

import { storyTemplate } from "../../../.storybook/storybookUtils";

import { Slider, SliderProps } from "../Slider";

export default {
  title: "Slider",
  component: Slider,
} as Meta;

const base = storyTemplate<SliderProps>(args => {
  return (
    <div role="group" aria-labelledby="styled-slider" style={{ width: 400 }}>
      <Slider {...args} />
    </div>
  );
}, {});

export const Default = base({});
export const Reversed = base({ reversed: true });

export const Orientation = () => {
  return (
    <div role="group" aria-labelledby="styled-slider" style={{ height: 200 }}>
      <Slider orientation="vertical" origin={0} />
    </div>
  );
};
