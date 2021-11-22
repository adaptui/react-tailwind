import * as React from "react";

import { Button, Tooltip, TooltipInitialState } from "../../index";

export type TooltipBasicProps = TooltipInitialState & {};

export const TooltipBasic: React.FC<TooltipBasicProps> = props => {
  return (
    <Tooltip trigger={<Button>Tooltip</Button>} {...props}>
      Add your information
    </Tooltip>
  );
};

export default TooltipBasic;
