import * as React from "react";

import {
  Button as RenderlesskitButton,
  ButtonProps as RenderlesskitButtonProps,
} from "../../index";

export type ButtonProps = RenderlesskitButtonProps & {};

export const Button: React.FC<ButtonProps> = props => {
  return <RenderlesskitButton {...props}>Continue</RenderlesskitButton>;
};

export default Button;
