import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import "./box.css";
import { Box, BoxProps } from "../index";
import { Button as ButtonComponent } from "../../button";

export default {
  title: "Box",
  component: Box,
} as Meta;

const Base: Story<BoxProps> = args => <Box {...args}>This is the Box</Box>;

export const Default = Base.bind({});
Default.args = {};

const BoxStyled: Story<BoxProps> = args => (
  <Box
    {...args}
    as="figure"
    className="p-8 bg-gray-100 md:flex rounded-xl md:p-0"
  >
    <Box
      as="img"
      className="object-cover w-32 h-32 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none"
      src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
      alt="Image of a women"
      width="384"
      height="512"
    />
    <Box className="pt-6 space-y-4 text-center md:p-8 md:text-left">
      <Box as="blockquote">
        <Box as="p" className="text-lg font-semibold">
          “Tailwind CSS is the only framework that I've seen scale on large
          teams. It’s easy to customize, adapts to any design, and the build
          size is tiny.”
        </Box>
      </Box>
      <Box as="figcaption" className="font-medium">
        <Box className="text-cyan-600">Sarah Dayan</Box>
        <Box className="text-gray-500">Staff Engineer, Algolia</Box>
      </Box>
    </Box>
  </Box>
);

export const Styled = BoxStyled.bind({});
Styled.args = {};

const BoxButton: Story<BoxProps> = args => (
  <Box
    as="button"
    type="button"
    className="h-8 px-4 text-white bg-red-500 rounded-md"
    {...args}
  >
    Button
  </Box>
);

export const Button = BoxButton.bind({});
Button.args = {};

const BoxButtonComp: Story<BoxProps> = args => (
  <Box as={ButtonComponent} {...args}>
    Button
  </Box>
);

export const ButtonComp = BoxButtonComp.bind({});
Button.args = {};
