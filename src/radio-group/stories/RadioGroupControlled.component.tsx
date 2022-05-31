import * as React from "react";
import { Separator } from "ariakit";

import { CheckboxGroupProps } from "../../checkbox-group";
import { Checkbox, Radio, RadioGroup, RadioGroupProps } from "../../index";

export type RadioGroupControlledProps = {};

export const RadioGroupControlled: React.FC<RadioGroupControlledProps> = () => {
  const [checkboxState, setCheckboxState] =
    React.useState<CheckboxGroupProps["value"]>(true);

  const onRadioStateChange: RadioGroupProps["setValue"] = state => {
    if (state === "mixed") {
      setCheckboxState("mixed");
      return;
    }

    if (state === "checked") {
      setCheckboxState(true);
      return;
    }

    setCheckboxState(false);
  };

  const getRadioState = (): RadioGroupProps["value"] => {
    if (checkboxState === "mixed") return "mixed";
    if (checkboxState === true) return "checked";
    return "unchecked";
  };

  const radioState = getRadioState();

  return (
    <div className="flex w-96 flex-col items-center space-y-4">
      <RadioComponent
        value={radioState}
        setValue={onRadioStateChange}
        stack="horizontal"
      />

      <Separator className="my-4 w-full" />

      <Checkbox
        value={checkboxState}
        setValue={setCheckboxState}
        label={capitalizeFirstLetter(radioState as string)}
      />
    </div>
  );
};

export default RadioGroupControlled;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const RadioComponent: React.FC<RadioGroupProps> = props => {
  return (
    <RadioGroup aria-label="checkbox state" {...props}>
      <Radio inputValue="checked" label="Checked" />
      <Radio inputValue="unchecked" label="Unchecked" />
      <Radio inputValue="mixed" label="Mixed" />
    </RadioGroup>
  );
};
