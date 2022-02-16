import * as React from "react";

import {
  Checkbox,
  CheckboxDescription,
  CheckboxIcon,
  CheckboxLabel,
  CheckboxText,
  EyeClose,
  EyeOpen,
  withIconA11y,
} from "../../index";

export type CheckboxCustomMediumProps = {};

export const CheckboxCustomMedium: React.FC<CheckboxCustomMediumProps> = () => {
  return (
    <Checkbox label="Checkbox" description="Fruits in the basket">
      {state => {
        return (
          <>
            <CheckboxLabel className="rounded border-2 border-blue-500 p-2" />
            <CheckboxIcon
              className={
                state.isChecked
                  ? "bg-red-500 peer-hover:bg-red-400"
                  : "bg-green-500 peer-hover:bg-green-400"
              }
            >
              <>
                {state.isUnchecked ? withIconA11y(<EyeClose />) : null}
                {state.isChecked ? withIconA11y(<EyeOpen />) : null}
              </>
            </CheckboxIcon>
            <CheckboxText className="text-green-500">
              Overidden Label
            </CheckboxText>
            <CheckboxDescription className="text-orange-500">
              Overridden Description
            </CheckboxDescription>
          </>
        );
      }}
    </Checkbox>
  );
};

export default CheckboxCustomMedium;
