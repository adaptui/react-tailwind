import React from "react";

import { Box, BoxProps } from "../box";

export type ArrowIconProps = React.SVGProps<SVGElement> & BoxProps & {};

export const ArrowIcon = React.forwardRef<HTMLOrSVGElement, ArrowIconProps>(
  (props, ref) => {
    return (
      <Box
        as="svg"
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 5"
        width="12"
        height="5"
        fill="none"
        {...props}
      >
        <path
          fill="currentColor"
          d="M11.147 0H.854C2.784 0 4.594 5 6 5c1.407 0 3.237-5 5.147-5Z"
        />
      </Box>
    );
  },
);
