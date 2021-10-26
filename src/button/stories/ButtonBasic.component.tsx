import * as React from "react";

import { Button, ButtonProps } from "../../index";

export type ButtonBasicProps = ButtonProps & {};

export const ButtonBasic: React.FC<ButtonBasicProps> = props => {
  return <Button {...props}>Continue</Button>;
};

export default ButtonBasic;
