import React from "react";
import { Meta } from "@storybook/react";

import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { Spinner, SpinnerProps } from "../index";

export default {
  title: "Feedback/Spinner",
  component: Spinner,
  argTypes: createControls("spinner", { unions: ["size", "stroke"] }),
} as Meta;

const base = storyTemplate<SpinnerProps>(args => <Spinner {...args} />);

export const ExtraSmall = base({ size: "xs" });
export const Small = base({ size: "sm" });
export const Medium = base({ size: "md" });
export const Large = base({ size: "lg" });
export const ExtraLarge = base({ size: "xl" });

export const StrokeVisible = base({ size: "md", stroke: "visible" });
