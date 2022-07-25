import * as React from "react";

import { Button, Tooltip, TooltipProps } from "../../index";

export type TooltipBasicProps = TooltipProps & {};

export const TooltipBasic: React.FC<TooltipBasicProps> = props => {
  return (
    <Tooltip as={Button} content="Add your information" {...props}>
      Tooltip
    </Tooltip>
  );
};

export default TooltipBasic;
