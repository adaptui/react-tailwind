import React from "react";
import { Meta } from "@storybook/react";

import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";

import { Slider, SliderProps } from "../Slider";
import { SliderThumbHandle } from "../../icons/SliderThumbHandle";
import { SliderTrack } from "../SliderTrack";
import { SliderThumb } from "../SliderThumb";

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

export const Vertical = () => {
  return (
    <div role="group" aria-labelledby="styled-slider" style={{ height: 200 }}>
      <Slider size="lg" orientation="vertical" origin={0} />
    </div>
  );
};

export const Customization = () => {
  return (
    <div role="group" aria-labelledby="styled-slider" style={{ width: 400 }}>
      <Slider size="xs">
        {({ state }) => (
          <>
            <span>
              {state.isThumbDragging(0) ? "Dragging" : "Not dragging"}
            </span>
            <SliderThumb tooltipVisible={true}></SliderThumb>
            <SliderTrack />
          </>
        )}
      </Slider>
    </div>
  );
};
