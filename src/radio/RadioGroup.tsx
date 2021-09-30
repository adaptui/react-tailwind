import * as React from "react";
import {
  cx,
  Radio,
  RadioGroup as RenderlesskitRadioGroup,
  RadioGroupHTMLProps as RenderlesskitRadioGroupHTMLProps,
} from "@renderlesskit/react";

import { useTheme } from "../theme";
import { runIfFn } from "../utils";
import { RenderProp } from "../utils/types";

import {
  RadioGroupInitialState,
  RadioGroupStateReturn,
  RadioStateContextProvider,
  useRadioGroupStateSplit,
} from "./RadioGroupState";

export type RadioGroupOwnProps = RenderlesskitRadioGroupHTMLProps & {};

export type RadioGroupProps = RadioGroupInitialState &
  RadioGroupOwnProps &
  RenderProp<RadioGroupStateReturn>;

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const [state, radioGroupProps] = useRadioGroupStateSplit(props);
    const { children, className: htmlClassName, ...rest } = radioGroupProps;

    const theme = useTheme("radio");
    const className = cx(
      theme.group[state.stack].base,
      theme.group[state.stack].size[state.size],
      htmlClassName,
    );

    return (
      <RenderlesskitRadioGroup
        ref={ref}
        {...state}
        className={className}
        {...rest}
      >
        <RadioStateContextProvider value={state}>
          {runIfFn(children, state)}
        </RadioStateContextProvider>
      </RenderlesskitRadioGroup>
    );
  },
);

Radio.displayName = "Radio";
