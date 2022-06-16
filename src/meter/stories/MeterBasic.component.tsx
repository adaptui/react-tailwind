import * as React from "react";

import { Meter, MeterProps } from "../../index";

export type MeterBasicProps = MeterProps & {};

export const MeterBasic: React.FC<MeterBasicProps> = props => {
  return (
    <div className="w-80">
      <Meter {...props} />
    </div>
  );
};

export default MeterBasic;
