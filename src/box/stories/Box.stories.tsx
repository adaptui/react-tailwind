import { Meta } from "@storybook/react";

import { Box } from "../index";
import { twMerge as cx } from "tailwind-merge";

export default {
  title: "Primitives/Box",
  component: Box,
  parameters: {
    options: { showPanel: false },
    layout: "centered",
  },
} as Meta;

export const Default = () => {
  return <Box>This is a div box</Box>;
};

export const Styled = () => (
  <Box
    as="figure"
    className="p-8 overflow-hidden bg-gray-100 md:flex rounded-xl md:p-0"
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

export const AsButton = () => {
  return (
    <Box
      as="button"
      type="button"
      className={cx(
        "h-8 px-4 text-base font-bold text-white bg-red-500 rounded-md",
      )}
    >
      Button
    </Box>
  );
};

export const AsPrevButtonComp = () => (
  <Box as={AsButton} className="bg-green-500">
    Button
  </Box>
);
