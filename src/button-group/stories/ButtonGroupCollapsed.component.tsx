import * as React from "react";

import { Button, ButtonGroup, ButtonGroupProps } from "../../index";

export type ButtonGroupCollapsedProps = ButtonGroupProps & {};

export const ButtonGroupCollapsed: React.FC<ButtonGroupCollapsedProps> =
  props => {
    return (
      <ButtonGroup collapsed {...props}>
        <Button>Undo</Button>
        <Button>Redo</Button>
        <Button>Copy</Button>
        <Button>Paste</Button>
        <Button>Delete</Button>
        <Button>Close</Button>
      </ButtonGroup>
    );
  };

export default ButtonGroupCollapsed;
