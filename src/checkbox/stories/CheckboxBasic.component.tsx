import * as React from "react";

import {
  Checkbox as RenderlesskitCheckbox,
  CheckboxProps as RenderlesskitCheckboxProps,
} from "../../index";

export type CheckboxProps = RenderlesskitCheckboxProps & {};

export const Checkbox: React.FC<CheckboxProps> = props => {
  return <RenderlesskitCheckbox {...props} />;
};

export default Checkbox;
