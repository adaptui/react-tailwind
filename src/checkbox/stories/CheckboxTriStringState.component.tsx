import * as React from "react";

import { Checkbox, CheckboxGroup, CheckboxProps } from "../../index";

export type CheckboxTriStringStateProps = {};

export const CheckboxTriStringState: React.FC<CheckboxTriStringStateProps> =
  () => {
    const values = React.useMemo(() => ["Apple", "Orange", "Watermelon"], []);
    const [itemState, setItemState] = React.useState<
      NonNullable<CheckboxProps["state"]>
    >([]);
    const [groupState, setGroupState] =
      React.useState<NonNullable<CheckboxProps["state"]>>(false);

    const isAllChecked = groupState === true;
    const isIndeterminate = groupState === "indeterminate";

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
        setGroupState("indeterminate");
      } else {
        setGroupState(false);
      }
    }, [itemState, values]);

    return (
      <CheckboxGroup aria-label="Tristate Checkbox using string values">
        <Checkbox
          state={groupState}
          onStateChange={setGroupState}
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
        >
          {values.map((value, i) => {
            return (
              <Checkbox
                key={i}
                id={`check${i + 1}`}
                state={itemState}
                onStateChange={setItemState}
                value={value}
                label={capitalizeFirstLetter(value)}
              />
            );
          })}
        </CheckboxGroup>
      </CheckboxGroup>
    );
  };

export default CheckboxTriStringState;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
