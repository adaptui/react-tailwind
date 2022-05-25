import * as React from "react";
import { Separator } from "reakit";

import {
  Checkbox,
  Radio,
  RadioGroup,
  RadioGroupProps,
  Switch,
  SwitchProps,
} from "../../index";

export type SwitchControlledProps = {};

export const SwitchControlled: React.FC<SwitchControlledProps> = () => {
  const [switchState, setSwitchState] =
    React.useState<SwitchProps["value"]>(true);

  const onRadioStateChange: RadioGroupProps["setValue"] = state => {
    if (state === "indeterminate") {
      setSwitchState("indeterminate");
      return;
    }

    if (state === "checked") {
      setSwitchState(true);
      return;
    }

    setSwitchState(false);
  };

  const getRadioState = (): RadioGroupProps["value"] => {
    if (switchState === true) return "checked";

    return "unchecked";
  };

  const radioState = getRadioState();

  return (
    <div className="flex w-96 flex-col items-center space-y-4">
      <Switch
        value={switchState}
        setValue={setSwitchState}
        label={capitalizeFirstLetter(radioState as string)}
      />

      <Separator className="my-4 w-full" />

      <RadioComponent
        value={radioState}
        setValue={onRadioStateChange}
        stack="horizontal"
      />

      <Separator className="my-4 w-full" />

      <Checkbox
        value={switchState}
        setValue={setSwitchState}
        label={capitalizeFirstLetter(radioState as string)}
      />
    </div>
  );
};

export default SwitchControlled;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const RadioComponent: React.FC<RadioGroupProps> = props => {
  return (
    <RadioGroup aria-label="checkbox state" {...props}>
      <Radio inputValue="checked" label="Checked" />
      <Radio inputValue="unchecked" label="Unchecked" />
    </RadioGroup>
  );
};
