import * as React from "react";

import { Checkbox, CheckboxProps } from "../../index";

export type CheckboxBasicProps = CheckboxProps & {};

export const CheckboxBasic: React.FC<CheckboxBasicProps> = props => {
  return <Checkbox {...props} />;
};

export default CheckboxBasic;
