import * as React from "react";

import { CircularProgress, CircularProgressProps } from "../../index";

export type CircularProgressBasicProps = CircularProgressProps & {};

export const CircularProgressBasic: React.FC<
  CircularProgressBasicProps
> = props => {
  return (
    <div className="flex flex-col items-center">
      <CircularProgress value={50} {...props} />
    </div>
  );
};

export default CircularProgressBasic;
