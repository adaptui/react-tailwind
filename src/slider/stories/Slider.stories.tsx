import React from "react";
import { Meta } from "@storybook/react";

import { storyTemplate } from "../../../.storybook/storybookUtils";

import { Slider } from "../Slider";

export default {
  title: "Slider",
  component: Slider,
} as Meta;

const base = storyTemplate<any>(
  args => {
    return (
      <div role="group" aria-labelledby="styled-slider" style={{ width: 400 }}>
        <Slider />
      </div>
    );
  },
  {
    defaultState: "2",
    size: "sm",
  },
);

export const Default = base({});
