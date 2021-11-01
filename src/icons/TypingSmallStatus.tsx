import React from "react";

import { Box, BoxProps } from "../box";

export type IconProps = React.SVGProps<SVGElement> & BoxProps & {};

export const TypingSmallStatusIcon = React.forwardRef<
  HTMLOrSVGElement,
  IconProps
>((props, ref) => {
  return (
    <Box
      as="svg"
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 5"
      fill="none"
      {...props}
    >
      <rect width="8" height="5" fill="currentColor" rx="2.5"></rect>
      <rect
        width="2"
        height="2"
        x="1.5"
        y="1.5"
        fill="#fff"
        rx="1"
        className="animate-pulse animation-duration-1000"
      ></rect>
      <rect
        width="2"
        height="2"
        x="4.5"
        y="1.5"
        fill="#fff"
        rx="1"
        className="animate-pulse animation-duration-1000 animation-delay-500"
      ></rect>
    </Box>
  );
});
