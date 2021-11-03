import * as React from "react";

import { Radio, RadioProps } from "../../index";

export const RadioBasic: React.FC<RadioProps> = props => {
  return <Radio value="apple" label="Apple" {...props} />;
};

export default RadioBasic;
