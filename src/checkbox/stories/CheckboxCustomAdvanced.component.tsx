import * as React from "react";
import { CheckboxState, useCheckboxState } from "ariakit";

import {
  CheckboxIcon,
  CheckboxInput,
  CheckboxInputProps,
  CheckboxLabel,
  CheckboxStateProps,
  tcm,
} from "../../index";

export type CheckboxCustomAdvancedProps = {};

export const CheckboxCustomAdvanced: React.FC<
  CheckboxCustomAdvancedProps
> = () => {
  const state = useCheckboxState<string[]>({ defaultValue: [] });

  return (
    <>
      <CustomCheckbox value="one" state={state}>
        Button one 😁
      </CustomCheckbox>
      <CustomCheckbox className="ml-2" value="two" state={state}>
        Button two 🤓
      </CustomCheckbox>
      <CustomCheckbox className="ml-2" value="three" state={state}>
        Button three 👻
      </CustomCheckbox>
    </>
  );
};

export default CheckboxCustomAdvanced;

type CustomCheckboxProps = Omit<CheckboxInputProps, "state"> & {
  state: CheckboxState;
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = props => {
  const { state, value, className, children, ...inputProps } = props;

  return (
    <CheckboxLabel
      state={state}
      className={tcm("rounded border-2 border-blue-500 px-8 py-2", className)}
    >
      <CheckboxInput {...inputProps} state={state} />
      {Array(state).includes(value) ? (
        <CheckboxIcon className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-blue-500">
          <svg
            className="h-5 w-5"
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
