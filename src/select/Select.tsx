import * as React from "react";

import { RenderProp } from "../utils";

import { SelectBase, SelectBaseHTMLProps } from "./SelectBase";
import { SelectPrefix } from "./SelectPrefix";
import { useSelectProps } from "./SelectProps";
import { SelectInitialState, SelectStateReturn } from "./SelectState";
import { SelectSuffix } from "./SelectSuffix";
import { SelectWrapper } from "./SelectWrapper";

export type SelectOwnProps = SelectBaseHTMLProps & {};

export type SelectProps = SelectInitialState &
  SelectOwnProps &
  RenderProp<SelectStateReturn>;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const {
      wrapperProps,
      mainProps,
      prefixProps,
      suffixProps,
      suffix,
      prefix,
    } = useSelectProps(props);

    return (
      <SelectWrapper {...wrapperProps}>
        <SelectBase ref={ref} {...mainProps} />
        {prefix ? <SelectPrefix {...prefixProps} /> : null}
        {suffix ? <SelectSuffix {...suffixProps} /> : null}
      </SelectWrapper>
    );
  },
);

Select.displayName = "Select";
