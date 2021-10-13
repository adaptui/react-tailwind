import * as React from "react";

import { Switch, SwitchProps } from "../../index";

export type SwitchBasicProps = SwitchProps & {};

export const SwitchBasic: React.FC<SwitchBasicProps> = props => {
  return <Switch {...props} />;
};

export default SwitchBasic;
