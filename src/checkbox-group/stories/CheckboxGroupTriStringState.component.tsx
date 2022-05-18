import * as React from "react";

import { Value } from "../../checkbox/CheckboxUIState";
import { Checkbox, CheckboxGroup } from "../../index";

export type CheckboxGroupTriStringStateProps = {};

export const CheckboxGroupTriStringState: React.FC<
  CheckboxGroupTriStringStateProps
> = () => {
  const values = React.useMemo(() => ["Apple", "Orange", "Watermelon"], []);
  const [itemState, setItemState] = React.useState<Value>([]);
  const [groupState, setGroupState] = React.useState<Value>(false);

  const isAllChecked = groupState === true;
  const isIndeterminate = groupState === "mixed";

  // updates items when group is toggled
  React.useEffect(() => {
    if (groupState === true) {
      setItemState(values);
    } else if (groupState === false) {
      setItemState([]);
    }
  }, [groupState, values]);

  // updates group when items is toggled
  React.useEffect(() => {
    if (!Array.isArray(itemState)) return;

    if (itemState.length === values.length) {
      setGroupState(true);
    } else if (itemState.length) {
      setGroupState("mixed");
    } else {
      setGroupState(false);
    }
  }, [itemState, values]);

  return (
    <CheckboxGroup
      aria-label="Tristate Checkbox using string values"
      withState={false}
    >
      <Checkbox
        value={groupState}
        setValue={setGroupState}
        label={
          isIndeterminate
            ? "Fruits in the basket"
            : isAllChecked
            ? "Basket full"
            : "Basket empty"
        }
        aria-controls="check1 check2 check3"
      />
      <CheckboxGroup
        role="presentation"
        aria-label="For presentation"
        stack="horizontal"
        withState={false}
      >
        {values.map((value, i) => {
          return (
            <Checkbox
              key={i}
              id={`check${i + 1}`}
              value={itemState}
              setValue={setItemState}
              inputValue={value}
              label={capitalizeFirstLetter(value)}
            />
          );
        })}
      </CheckboxGroup>
    </CheckboxGroup>
  );
};

export default CheckboxGroupTriStringState;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
