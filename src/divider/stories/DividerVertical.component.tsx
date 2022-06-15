import * as React from "react";

import { Divider, DividerProps } from "../../index";

export type DividerVerticalProps = DividerProps & {};

export const DividerVertical: React.FC<DividerVerticalProps> = props => {
  return (
    <div className="flex h-80 items-center justify-center">
      <Divider {...props} />
    </div>
  );
};

export default DividerVertical;
