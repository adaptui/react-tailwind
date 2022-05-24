import * as React from "react";

import { SelectBase } from "./SelectBase";
import { SelectPrefix } from "./SelectPrefix";
import { SelectProps, useSelectProps } from "./SelectProps";
import { SelectSuffix } from "./SelectSuffix";
import { SelectWrapper } from "./SelectWrapper";

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { wrapperProps, baseProps, prefixProps, suffixProps, uiProps } =
      useSelectProps(props);
    const { prefix, suffix } = uiProps;

    return (
      <SelectWrapper {...wrapperProps}>
        <SelectBase ref={ref} {...baseProps} />
        {prefix ? <SelectPrefix {...prefixProps} /> : null}
        {suffix ? <SelectSuffix {...suffixProps} /> : null}
      </SelectWrapper>
    );
  },
);

Select.displayName = "Select";
