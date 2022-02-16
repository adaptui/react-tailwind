import * as React from "react";
import { Separator } from "reakit";

import {
  Checkbox,
  CheckboxStateReturn,
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioGroupStateReturn,
} from "../../index";

export type CheckboxControlledProps = {};

export const CheckboxControlled: React.FC<CheckboxControlledProps> = () => {
  const [checkboxState, setCheckboxState] =
    React.useState<CheckboxStateReturn["state"]>(true);

  const onRadioStateChange: RadioGroupStateReturn["setState"] = state => {
    if (state === "indeterminate") {
      setCheckboxState("indeterminate");
      return;
    }

    if (state === "checked") {
      setCheckboxState(true);
      return;
    }

    setCheckboxState(false);
  };

  const getRadioState = (): RadioGroupStateReturn["state"] => {
    if (checkboxState === "indeterminate") return "indeterminate";
    if (checkboxState === true) return "checked";
    return "unchecked";
  };

  const radioState = getRadioState();

  return (
    <div className="flex w-96 flex-col items-center space-y-4">
      <Checkbox
        state={checkboxState}
        onStateChange={setCheckboxState}
        label={capitalizeFirstLetter(radioState as string)}
      />

      <Separator className="my-4 w-full" />

      <RadioComponent
        state={radioState}
        onStateChange={onRadioStateChange}
        stack="horizontal"
      />
    </div>
  );
};

export default CheckboxControlled;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const RadioComponent: React.FC<RadioGroupProps> = props => {
  return (
    <RadioGroup aria-label="checkbox state" className="space-x-2" {...props}>
      <Radio value="checked" label="Checked" />
      <Radio value="unchecked" label="Unchecked" />
      <Radio value="indeterminate" label="Indeterminate" />
    </RadioGroup>
  );
};
