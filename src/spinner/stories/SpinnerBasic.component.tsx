import * as React from "react";

import { Spinner, SpinnerProps } from "../../index";

export type SpinnerBasicProps = SpinnerProps & {};

export const SpinnerBasic: React.FC<SpinnerProps> = props => {
  return <Spinner {...props} />;
};

export default SpinnerBasic;
