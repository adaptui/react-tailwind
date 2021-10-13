import * as React from "react";

import { Box, BoxProps } from "../../index";

export type BoxBasicProps = BoxProps & {};

export const BoxBasic: React.FC<BoxBasicProps> = props => {
  return <Box {...props}>Box</Box>;
};

export default BoxBasic;
