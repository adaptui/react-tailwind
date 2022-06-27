import * as React from "react";

import {
  Checkbox,
  CheckboxDescription,
  CheckboxIcon,
  CheckboxLabel,
  CheckboxText,
  CheckboxUIProps,
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
      <CheckboxLabel className="rounded border-2 border-blue-500 p-2" />
      <CheckboxIcon className="bg-red-500">
        {CustomIconElement as unknown as React.ReactNode}
      </CheckboxIcon>
      <CheckboxText className="text-green-500">New Checkbox</CheckboxText>
      <CheckboxDescription className="text-orange-500">
        New Description
      </CheckboxDescription>
    </Checkbox>
  );
};

export default CheckboxCustomSimple;

const CustomIconElement = (props: CheckboxUIProps) => (
  <>
    {props.isUnchecked ? withIconA11y(<EyeClose />, {}, {}) : null}
    {props.isChecked ? withIconA11y(<EyeOpen />, {}, {}) : null}
  </>
);
