import * as React from "react";

import { Input, InputProps } from "../../index";

export type InputBasicProps = InputProps & {};

export const InputBasic: React.FC<InputBasicProps> = props => {
  return <Input {...props} />;
};

export default InputBasic;
