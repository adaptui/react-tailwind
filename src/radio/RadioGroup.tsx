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

import { RadioStateContextProvider, useRadioGroupStateSplit } from "./helpers";
import {
  RadioGroupInitialState,
  RadioGroupStateReturn,
} from "./RadioGroupState";

export type RadioGroupOwnProps = RenderlesskitRadioGroupHTMLProps & {
  /**
   * Controls how the group of radios are arranged
   *
   * @default vertical
   */
  stack?: "vertical" | "horizontal";
};

export type RadioGroupProps = RadioGroupInitialState &
  RadioGroupOwnProps &
  RenderProp<RadioGroupStateReturn>;

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const [state, radioGroupProps] = useRadioGroupStateSplit(props);
    const {
      stack = "vertical",
      children,
      className: htmlClassName,
      ...rest
    } = radioGroupProps;

    const theme = useTheme("radio");
    const className = cx(
      theme.group[stack].base,
      theme.group[stack].size[state.size],
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
