import React from "react";
import { CheckboxStateReturn } from "reakit";
import { Meta } from "@storybook/react/types-6-0";

import {} from "../index";
import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";
import { Checkbox, CheckboxProps, CheckboxStatus } from "../Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    defaultState: createUnionControl({
      true: true,
      false: false,
      indeterminate: "indeterminate",
    }),
    size: createUnionControl({
      xs: "xs",
      sm: "sm",
      lg: "lg",
    }),
  },
} as Meta;

const base = storyTemplate<CheckboxProps>(Checkbox, {
  children: "Checkbox",
  size: "sm",
  defaultState: true,
});

export const ExtraSmall = base({ size: "xs" });

export const Small = base({});

export const Large = base({ size: "lg" });

export const DefaultUnchecked = base({ defaultState: false });

export const DefaultChecked = base({ defaultState: true });

export const Controlled = () => {
  const [state, onStateChange] = React.useState<CheckboxStatus>(false);

  return (
    <>
      <Checkbox state={state} onStateChange={onStateChange}>
        Checkbox
      </Checkbox>
      <div className="mt-2">{`Checked: ${state}`}</div>
    </>
  );
};

export const Group = () => {
  const [state, onStateChange] = React.useState<CheckboxStatus>([]);

  return (
    <>
      <div className="mb-2">Choices: {(state as string[]).join(", ")}</div>
      <Checkbox state={state} onStateChange={onStateChange} value="apple">
        Apple
      </Checkbox>
      <Checkbox
        state={state}
        onStateChange={onStateChange}
        className="ml-2"
        value="orange"
      >
        Orange
      </Checkbox>
      <Checkbox
        state={state}
        onStateChange={onStateChange}
        className="ml-2"
        value="watermelon"
      >
        Watermelon
      </Checkbox>
    </>
  );
};

export const GroupIndeterminateSimple = () => {
  const [checkedItems, setCheckedItems] = React.useState<
    CheckboxStateReturn["state"][]
  >([false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        state={isIndeterminate ? "indeterminate" : allChecked}
        onStateChange={e => setCheckedItems([e, e])}
      >
        Parent Checkbox
      </Checkbox>
      <div className="flex flex-col pl-6 mt-1">
        <Checkbox
          state={checkedItems[0]}
          onStateChange={e => setCheckedItems([e, checkedItems[1]])}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          state={checkedItems[1]}
          onStateChange={e => setCheckedItems([checkedItems[0], e])}
        >
          Child Checkbox 2
        </Checkbox>
      </div>
    </>
  );
};

export const GroupIndeterminateComplex = () => {
  const values = React.useMemo(() => ["Apple", "Orange", "Watermelon"], []);
  const [itemState, setItemState] = React.useState<CheckboxStatus>([]);
  const [groupState, setGroupState] = React.useState<CheckboxStatus>(false);

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
    <>
      <Checkbox state={groupState} onStateChange={setGroupState}>
        Fruits
      </Checkbox>
      <div className="flex flex-col pl-6 mt-1">
        {values.map((value, i) => {
          return (
            <Checkbox
              key={i}
              state={itemState}
              onStateChange={setItemState}
              value={value}
            >
              {value}
            </Checkbox>
          );
        })}
      </div>
    </>
  );
};
