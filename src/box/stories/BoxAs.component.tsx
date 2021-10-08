import * as React from "react";

import {
  Box as RenderlesskitBox,
  BoxProps as RenderlesskitBoxProps,
  Button,
  ClockIcon,
  tcm,
} from "../../index";

export type BoxProps = RenderlesskitBoxProps & {};

export const Box: React.FC<BoxProps> = props => {
  const { className, ...rest } = props;

  return (
    <RenderlesskitBox
      as={Button}
      suffix={<ClockIcon />}
      className={tcm("bg-red-500 rounded-lg", className)}
      {...rest}
    >
      Box
    </RenderlesskitBox>
  );
};

export default Box;
