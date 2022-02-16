import * as React from "react";

import { Box, BoxProps, tcm } from "../../index";

export type BoxStyledProps = BoxProps & {};

export const BoxStyled: React.FC<BoxStyledProps> = props => {
  const { className, ...rest } = props;

  return (
    <Box
      as="figure"
      className={tcm("overflow-hidden rounded-xl bg-gray-100 p-8", className)}
      {...rest}
    >
      <Box
        as="img"
        className="mx-auto h-32 w-32 rounded-full object-cover md:h-auto md:w-48 md:rounded-md"
        src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
        alt="Image of a women"
        width="384"
        height="512"
      />
      <Box className="space-y-4 pt-6 text-center md:p-8 md:text-left">
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
};

export default BoxStyled;
