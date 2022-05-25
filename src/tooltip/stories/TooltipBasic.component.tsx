import * as React from "react";

import { Tooltip, TooltipProps } from "../../index";

export type TooltipBasicProps = TooltipProps & {};

export const TooltipBasic: React.FC<TooltipBasicProps> = props => {
  return <Tooltip content="Add your information" animated {...props}></Tooltip>;
};

export default TooltipBasic;
