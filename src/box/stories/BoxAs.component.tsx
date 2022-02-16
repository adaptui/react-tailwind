import * as React from "react";

import { Box, BoxProps, Button, ClockIcon, tcm } from "../../index";

export type BoxAsProps = BoxProps & {};

export const BoxAs: React.FC<BoxAsProps> = props => {
  const { className, ...rest } = props;

  return (
    <Box
      as={Button}
      suffix={<ClockIcon />}
      className={tcm("rounded-lg bg-red-500", className)}
      {...rest}
    >
      Box
    </Box>
  );
};

export default BoxAs;
