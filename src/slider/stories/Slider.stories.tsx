import React from "react";
import { Meta } from "@storybook/react";

import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";

import { Slider, SliderProps } from "../Slider";
import { SliderThumbHandle } from "../../icons/SliderThumbHandle";

export default {
  title: "Slider",
  component: Slider,
  argTypes: {
    size: createUnionControl(["xs", "sm", "lg"]),
  },
} as Meta;

const base = storyTemplate<SliderProps>(args => {
  return (
    <div role="group" aria-labelledby="styled-slider" style={{ width: 400 }}>
      <Slider {...args} />
    </div>
  );
}, {});

export const Default = base({ size: "sm" });
export const Origin = base({ origin: 50 });

export const ThumbContent = base({
  thumbContent: v => <small className="text-xxs">{v[0]}</small>,
});

export const ThumbIcon = base({
  thumbContent: <SliderThumbHandle />,
});

export const TooltipContent = base({
  tooltipVisible: true,
  tooltipContent: state => (
    <small className="text-xxs">value: {state.getThumbValueLabel(0)}</small>
  ),
});

export const TooltipPlacement = base({
  tooltipVisible: true,
  tooltipContent: state => (
    <small className="text-xxs">value: {state.getThumbValueLabel(0)}</small>
  ),
});

export const Reversed = base({ reversed: true });
export const Vertical = base({ orientation: "vertical" });

export const Orientation = () => {
  return (
    <div role="group" aria-labelledby="styled-slider" style={{ height: 200 }}>
      <Slider size="xs" orientation="vertical" origin={0} />
    </div>
  );
};
