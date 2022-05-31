import * as React from "react";
import { Separator } from "ariakit";

import { Value } from "../../checkbox/CheckboxUIState";
import { Checkbox, Radio, RadioGroup, RadioGroupProps } from "../../index";

export type CheckboxGroupControlledProps = {};

export const CheckboxGroupControlled: React.FC<
  CheckboxGroupControlledProps
> = () => {
  const [checkboxState, setCheckboxState] = React.useState<Value>(true);

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
  console.log("%cradioState", "color: #bfffc8", radioState);

  return (
    <div className="flex w-96 flex-col items-center space-y-4">
      <Checkbox
        value={checkboxState}
        setValue={setCheckboxState}
        label={capitalizeFirstLetter(radioState as string)}
      />

      <Separator className="my-4 w-full" />

      <RadioComponent
        value={radioState}
        setValue={onRadioStateChange}
        stack="horizontal"
      />
    </div>
  );
};

export default CheckboxGroupControlled;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const RadioComponent: React.FC<RadioGroupProps> = props => {
  return (
    <RadioGroup aria-label="checkbox state" className="space-x-2" {...props}>
      <Radio inputValue="checked" label="Checked" />
      <Radio inputValue="unchecked" label="Unchecked" />
      <Radio inputValue="mixed" label="Mixed" />
    </RadioGroup>
  );
};
