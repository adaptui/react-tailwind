import * as React from "react";

import { Radio, RadioProps } from "../../index";

export const RadioBasic: React.FC<RadioProps> = props => {
  return <Radio label="Apple" {...props} inputValue="apple" />;
};

export default RadioBasic;
