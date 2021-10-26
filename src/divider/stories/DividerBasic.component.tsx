import * as React from "react";

import { Divider, DividerProps } from "../../index";

export type DividerBasicProps = DividerProps & {};

export const DividerBasic: React.FC<DividerBasicProps> = props => {
  return (
    <div className="w-80">
      <Divider {...props} />
    </div>
  );
};

export default DividerBasic;
