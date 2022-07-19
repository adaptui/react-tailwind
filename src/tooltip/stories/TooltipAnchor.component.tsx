import * as React from "react";

import { Button } from "../../button";
import { Tooltip, TooltipProps } from "../../index";

export type TooltipAnchorProps = TooltipProps & {};

export const TooltipAnchor: React.FC<TooltipAnchorProps> = props => {
  return (
    <Tooltip
      anchor={<Button>Tooltip</Button>}
      content="Add your information"
      {...props}
    />
  );
};

export default TooltipAnchor;
