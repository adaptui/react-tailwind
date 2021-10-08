import * as React from "react";

import { CloseButton, CloseButtonProps } from "../../index";

export type ButtonCloseProps = CloseButtonProps & {};

export const ButtonClose: React.FC<ButtonCloseProps> = props => {
  return <CloseButton {...props} />;
};

export default ButtonClose;
