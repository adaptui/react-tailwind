import * as React from "react";

import { Button, Tooltip, TooltipInitialState } from "../../index";

export type TooltipBasicProps = TooltipInitialState & {};

export const TooltipBasic: React.FC<TooltipBasicProps> = props => {
  return (
    <Tooltip content="Add your information" {...props}>
      <Button>Tooltip</Button>
    </Tooltip>
  );
};

export default TooltipBasic;
