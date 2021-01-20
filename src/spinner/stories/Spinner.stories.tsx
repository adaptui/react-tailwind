import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { Spinner, SpinnerProps } from "../index";
import {
  createControls,
  storyTemplate,
} from "../../../.storybook/storybookUtils";

export default {
  title: "Spinner",
  component: Spinner,
  argTypes: createControls("spinner", { unions: ["size", "stroke"] }),
} as Meta;

const base = storyTemplate<SpinnerProps>(args => <Spinner {...args} />);

export const Default = base({ size: "md" });

export const StrokeVisible = base({ size: "md", stroke: "visible" });
