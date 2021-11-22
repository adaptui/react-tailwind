import * as React from "react";

import { Button, ButtonGroup, ButtonGroupProps } from "../../index";

export type ButtonGroupBasicProps = ButtonGroupProps & {};

export const ButtonGroupBasic: React.FC<ButtonGroupBasicProps> = props => {
  return (
    <ButtonGroup {...props}>
      <Button>Undo</Button>
      <Button>Redo</Button>
      <Button>Copy</Button>
      <Button>Paste</Button>
      <Button>Delete</Button>
      <Button>Close</Button>
    </ButtonGroup>
  );
};

export default ButtonGroupBasic;
