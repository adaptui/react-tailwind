import * as React from "react";

import {
  CheckboxIcon,
  CheckboxInitialState,
  CheckboxInput,
  CheckboxInputHTMLProps,
  CheckboxLabel,
  CheckboxState,
  tcm,
  useCheckboxStateSplit,
} from "../../index";

export type CheckboxCustomAdvancedProps = {};

export const CheckboxCustomAdvanced: React.FC<
  CheckboxCustomAdvancedProps
> = () => {
  const [state, onStateChange] = React.useState<CheckboxState["state"]>([]);

  return (
    <>
      <CustomCheckbox value="one" state={state} onStateChange={onStateChange}>
        Button one 😁
      </CustomCheckbox>
      <CustomCheckbox
        className="ml-2"
        value="two"
        state={state}
        onStateChange={onStateChange}
      >
        Button two 🤓
      </CustomCheckbox>
      <CustomCheckbox
        className="ml-2"
        value="three"
        state={state}
        onStateChange={onStateChange}
      >
        Button three 👻
      </CustomCheckbox>
    </>
  );
};

export default CheckboxCustomAdvanced;

type CustomCheckboxProps = CheckboxInputHTMLProps & CheckboxInitialState;

const CustomCheckbox: React.FC<CustomCheckboxProps> = props => {
  const [state, checkboxProps] = useCheckboxStateSplit(props);
  const { className, children, ...inputProps } = checkboxProps;

  return (
    <CheckboxLabel
      {...state}
      className={tcm("px-8 py-2 border-2 border-blue-500 rounded", className)}
    >
      <CheckboxInput {...state} {...inputProps} />
      {state.isChecked ? (
        <CheckboxIcon className="text-blue-500 absolute inset-y-0 left-0 flex items-center pl-1.5">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            role="img"
            focusable={false}
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </CheckboxIcon>
      ) : null}
      <span className="select-none">{children}</span>
    </CheckboxLabel>
  );
};
