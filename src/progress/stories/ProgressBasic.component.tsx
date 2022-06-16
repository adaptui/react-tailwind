import * as React from "react";

import { Progress, ProgressProps } from "../../index";

export type ProgressBasicProps = ProgressProps & {};

export const ProgressBasic: React.FC<ProgressBasicProps> = props => {
  return (
    <div className="w-80">
      <Progress value={50} {...props} />
    </div>
  );
};

export default ProgressBasic;
