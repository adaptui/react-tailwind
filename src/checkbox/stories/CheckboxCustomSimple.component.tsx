import * as React from "react";

import {
  Checkbox,
  CheckboxDescription,
  CheckboxIcon,
  CheckboxLabel,
  CheckboxOwnProps,
  CheckboxText,
  EyeClose,
  EyeOpen,
  withIconA11y,
} from "../../index";

export type CheckboxCustomSimpleProps = {};

export const CheckboxCustomSimple: React.FC<CheckboxCustomSimpleProps> = () => {
  return (
    // These values will be overridden if the children are passed in respectively
    <Checkbox
      icon={CustomIconElement}
      label="Checkbox"
      description="Fruits in the basket"
    >
      <CheckboxLabel className="p-2 border-2 border-blue-500 rounded" />
      <CheckboxIcon className="bg-red-500">{CustomIconElement}</CheckboxIcon>
      <CheckboxText className="text-green-500">New Checkbox</CheckboxText>
      <CheckboxDescription className="text-orange-500">
        New Description
      </CheckboxDescription>
    </Checkbox>
  );
};

export default CheckboxCustomSimple;

const CustomIconElement: CheckboxOwnProps["icon"] = state => (
  <>
    {state.isUnchecked ? withIconA11y(<EyeClose />) : null}
    {state.isChecked ? withIconA11y(<EyeOpen />) : null}
  </>
);
