import * as React from "react";
import {
  Radio,
  RadioGroup as RenderlesskitRadioGroup,
  RadioGroupHTMLProps as RenderlesskitRadioGroupHTMLProps,
} from "@renderlesskit/react";

import { runIfFn } from "../utils";
import { RenderProp } from "../utils/types";

import { RadioStateContextProvider, useRadioStateSplit } from "./helpers";
import {
  RadioGroupInitialState,
  RadioGroupStateReturn,
} from "./RadioGroupState";

export type RadioGroupOwnProps = RenderlesskitRadioGroupHTMLProps & {};

export type RadioGroupProps = RadioGroupInitialState &
  RadioGroupOwnProps &
  RenderProp<RadioGroupStateReturn>;

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const [state, radioGroupProps] = useRadioStateSplit(props);
    const { children, ...rest } = radioGroupProps;

    return (
      <RenderlesskitRadioGroup ref={ref} {...state} {...rest}>
        <RadioStateContextProvider value={state}>
          {runIfFn(children, state)}
        </RadioStateContextProvider>
      </RenderlesskitRadioGroup>
    );
  },
);

Radio.displayName = "Radio";
