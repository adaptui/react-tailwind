import { splitProps } from "reakit-utils";

import {
  CheckboxInitialState,
  useCheckboxState,
  CheckboxStateReturn,
} from "./CheckboxState";
import { Dict } from "../utils/types";
import { getValidChildren } from "../utils";
import { USE_CHECKBOX_STATE_KEYS } from "./__keys";
import { CheckboxProps, CheckboxOwnProps } from "./Checkbox";

export const useCheckboxProps = (props: CheckboxProps) => {
  const [stateProps, checkboxProps] = splitProps(
    props,
    USE_CHECKBOX_STATE_KEYS,
  ) as [CheckboxInitialState, CheckboxOwnProps];
  const state = useCheckboxState(stateProps);

  return [state, checkboxProps, stateProps] as [
    CheckboxStateReturn,
    CheckboxOwnProps,
    CheckboxInitialState,
  ];
};

const ComponentPropsMap = {
  CheckboxLabel: "labelProps",
  CheckboxInput: "inputProps",
  CheckboxIcon: "iconProps",
  CheckboxText: "textProps",
  CheckboxDescription: "descriptionProps",
};

export const getCheckboxComponentProps = (children: React.ReactNode) => {
  const validChildren = getValidChildren(children);
  const props: Dict = {};

  validChildren.forEach(child => {
    props[
      // @ts-ignore
      ComponentPropsMap[child.type.displayName]
    ] = child.props;
  });

  return props;
};
