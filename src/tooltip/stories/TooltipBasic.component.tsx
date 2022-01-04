import * as React from "react";

import {
  Button,
  Tooltip,
  TooltipInitialState,
  TooltipWrapper,
} from "../../index";

export type TooltipBasicProps = TooltipInitialState & {};

export const TooltipBasic: React.FC<TooltipBasicProps> = props => {
  return (
    <Tooltip content="Add your information" {...props}>
      <TooltipWrapper className="z-50" />
      <Button>Tooltip</Button>
    </Tooltip>
  );
};

export default TooltipBasic;
