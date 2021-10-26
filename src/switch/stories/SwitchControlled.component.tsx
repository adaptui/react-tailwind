import * as React from "react";
import { Separator } from "reakit";

import {
  Checkbox,
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioGroupStateReturn,
  Switch,
  SwitchStateReturn,
} from "../../index";

export type SwitchControlledProps = {};

export const SwitchControlled: React.FC<SwitchControlledProps> = () => {
  const [switchState, setSwitchState] =
    React.useState<SwitchStateReturn["state"]>(true);

  const onRadioStateChange: RadioGroupStateReturn["setState"] = state => {
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

  const getRadioState = (): RadioGroupStateReturn["state"] => {
    if (switchState === true) return "checked";

    return "unchecked";
  };

  const radioState = getRadioState();

  return (
    <div className="flex flex-col items-center space-y-4 w-96">
      <Switch
        state={switchState}
        onStateChange={setSwitchState}
        label={capitalizeFirstLetter(radioState as string)}
      />

      <Separator className="w-full my-4" />

      <RadioComponent
        state={radioState}
        onStateChange={onRadioStateChange}
        stack="horizontal"
      />

      <Separator className="w-full my-4" />

      <Checkbox
        state={switchState}
        onStateChange={setSwitchState}
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
      <Radio value="checked" label="Checked" />
      <Radio value="unchecked" label="Unchecked" />
    </RadioGroup>
  );
};
