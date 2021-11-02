import { CircleIcon } from "../icons";
import { isNull, RenderPropType, splitProps } from "../utils";

import { RADIO_GROUP_STATE_KEYS } from "./__keys";
import { RadioProps } from "./Radio";
import {
  RadioGroupActions,
  RadioGroupState,
  RadioGroupStateReturn,
  useRadioGroupContext,
} from "./RadioGroupState";
import { RadioInputProps } from "./RadioInput";

export type RadioOwnStateProps = {
  value: RadioInputProps["value"];

  /**
   * `true`, if the value of the radio matches the current state.
   */
  isChecked: boolean;

  /**
   * Provide custom icons as a replacement for the default ones.
   */
  icon: RenderPropType<RadioStateReturn>;

  /**
   * Description for the Radio.
   */
  label: RenderPropType<RadioStateReturn>;

  /**
   * Description for the Radio.
   */
  description: RenderPropType<RadioStateReturn>;
};

export type RadioState = RadioGroupState & RadioOwnStateProps & {};

export type RadioActions = RadioGroupActions & {};

export type RadioStateReturn = RadioState & RadioActions;

export type RadioInitialState = Partial<
  Pick<RadioState, "icon" | "label" | "description" | "value">
> &
  Partial<RadioGroupStateReturn>;

export const useRadioState = (
  props: RadioInitialState = {},
): RadioStateReturn => {
  const [stateReturnProps, radioProps] = splitProps(
    props,
    RADIO_GROUP_STATE_KEYS,
  ) as [RadioGroupStateReturn, RadioOwnStateProps];
  const { icon = RadioDefaultIcon, label, description, value } = radioProps;
  const radioGroupContextState = useRadioGroupContext();
  const radioGroupState = (
    isNull(radioGroupContextState) ? stateReturnProps : radioGroupContextState
  ) as RadioGroupStateReturn;

  const isChecked = radioGroupState.state === value;

  return {
    isChecked,
    icon,
    label,
    description,
    value,
    ...radioGroupState,
  };
};

export const RadioDefaultIcon: RadioProps["icon"] = state => {
  const { isChecked } = state;

  return <>{isChecked ? <CircleIcon /> : null}</>;
};
