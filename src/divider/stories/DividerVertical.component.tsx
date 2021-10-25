import * as React from "react";

import { Divider, DividerProps } from "../../index";

export type DividerVerticalProps = DividerProps & {};

export const DividerVertical: React.FC<DividerVerticalProps> = props => {
  return (
    <div className="flex items-center justify-center h-80">
      <Divider orientation="vertical" {...props} />
    </div>
  );
};

export default DividerVertical;
