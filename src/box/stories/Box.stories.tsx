import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import "./box.css";
import { Box, BoxProps } from "../index";

export default {
  title: "Box",
  component: Box,
} as Meta;

const Base: Story<BoxProps> = args => (
  <Box as="div" {...args}>
    This is the Box
  </Box>
);

export const Default = Base.bind({});
Default.args = {};

const BaseStyled: Story<BoxProps> = args => (
  <Box
    {...args}
    as="figure"
    className="p-8 bg-gray-100 md:flex rounded-xl md:p-0"
  >
    <img
      className="w-32 h-32 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none"
      src="/sarah-dayan.jpg"
      alt=""
      width="384"
      height="512"
    />
    <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
      <blockquote>
        <p className="text-lg font-semibold">
          “Tailwind CSS is the only framework that I've seen scale on large
          teams. It’s easy to customize, adapts to any design, and the build
          size is tiny.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-cyan-600">Sarah Dayan</div>
        <div className="text-gray-500">Staff Engineer, Algolia</div>
      </figcaption>
    </div>
  </Box>
);

export const Styled = BaseStyled.bind({});
Styled.args = {};
