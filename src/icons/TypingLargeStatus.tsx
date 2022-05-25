import React from "react";

import { Box, BoxProps } from "../box";

export type TypingLargeStatusIconProps = React.SVGProps<SVGElement> &
  BoxProps & {};

export const TypingLargeStatusIcon = React.forwardRef<
  HTMLOrSVGElement,
  TypingLargeStatusIconProps
>((props, ref) => {
  return (
    <Box {...props}>
      {props => (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 7"
          {...props}
        >
          <rect width="12" height="7" fill="currentColor" rx="3.5"></rect>
          <rect
            width="2"
            height="2"
            x="2"
            y="2.5"
            fill="#fff"
            rx="1"
            className="animate-pulse animation-duration-1000"
          />
          <rect
            width="2"
            height="2"
            x="5"
            y="2.5"
            fill="#fff"
            rx="1"
            className="animate-pulse animation-delay-333 animation-duration-1000"
          />
          <rect
            width="2"
            height="2"
            x="8"
            y="2.5"
            fill="#fff"
            rx="1"
            className="animate-pulse animation-delay-667 animation-duration-1000"
          />
        </svg>
      )}
    </Box>
  );
});
