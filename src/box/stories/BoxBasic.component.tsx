import * as React from "react";

import {
  Box as RenderlesskitBox,
  BoxProps as RenderlesskitBoxProps,
} from "../../index";

export type BoxProps = RenderlesskitBoxProps & {};

export const Box: React.FC<BoxProps> = props => {
  return <RenderlesskitBox {...props}>Box</RenderlesskitBox>;
};

export default Box;
