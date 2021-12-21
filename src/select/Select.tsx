import * as React from "react";

import { RenderProp } from "../utils";

import { SelectMain, SelectMainHTMLProps } from "./SelectMain";
import { SelectPrefix } from "./SelectPrefix";
import { useSelectProps } from "./SelectProps";
import { SelectInitialState, SelectStateReturn } from "./SelectState";
import { SelectSuffix } from "./SelectSuffix";
import { SelectWrapper } from "./SelectWrapper";

export type SelectOwnProps = SelectMainHTMLProps & {};

export type SelectProps = SelectInitialState &
  SelectOwnProps &
  RenderProp<SelectStateReturn>;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { state, wrapperProps, mainProps, prefixProps, suffixProps } =
      useSelectProps(props);
    const { prefix, suffix } = state;

    return (
      <SelectWrapper {...wrapperProps}>
        <SelectMain ref={ref} {...mainProps} />
        {prefix ? <SelectPrefix {...prefixProps} /> : null}
        {suffix ? <SelectSuffix {...suffixProps} /> : null}
      </SelectWrapper>
    );
  },
);

Select.displayName = "Select";
