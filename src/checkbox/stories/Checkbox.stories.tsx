import React from "react";
import { CheckboxStateReturn, useCheckboxState } from "reakit";
import { Story, Meta } from "@storybook/react/types-6-0";

import {} from "../index";
import { Checkbox, CheckboxProps } from "../Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;

const Base: Story<CheckboxProps> = args => (
  <Checkbox {...args}>Checkbox</Checkbox>
);

export const Default = Base.bind({});
Default.args = {};

export const DefaultChecked = Base.bind({});
DefaultChecked.args = { defaultState: true };

export const DefaultIndeterminate = Base.bind({});
DefaultIndeterminate.args = { defaultState: "indeterminate" };

export const Controlled = () => {
  const [state, setState] = React.useState<CheckboxStateReturn["state"]>(false);

  return (
    <Checkbox state={state} setState={setState}>
      Checkbox
    </Checkbox>
  );
};

export const Group = () => {
  const checkbox = useCheckboxState({ state: [] });

  return (
    <>
      <div>Choices: {checkbox.state.join(", ")}</div>
      <Checkbox {...checkbox} value="apple">
        Apple
      </Checkbox>
      <Checkbox {...checkbox} className="ml-2" value="orange">
        Orange
      </Checkbox>
      <Checkbox {...checkbox} className="ml-2" value="watermelon">
        Watermelon
      </Checkbox>
    </>
  );
};

export const GroupIndeterminateSimple = () => {
  const [checkedItems, setCheckedItems] = React.useState<
    [CheckboxStateReturn["state"], CheckboxStateReturn["state"]]
  >([false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        state={isIndeterminate ? "indeterminate" : allChecked}
        setState={e => setCheckedItems([e, e])}
      >
        Parent Checkbox
      </Checkbox>
      <div className="flex flex-col pl-6 mt-1">
        <Checkbox
          state={checkedItems[0]}
          setState={e => setCheckedItems([e, checkedItems[1]])}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          state={checkedItems[1]}
          setState={e => setCheckedItems([checkedItems[0], e])}
        >
          Child Checkbox 2
        </Checkbox>
      </div>
    </>
  );
};

export const GroupIndeterminateComplex = () => {
  const values = React.useMemo(() => ["Apple", "Orange", "Watermelon"], []);
  const [itemState, setItemState] = React.useState<string[]>([]);
  const [groupState, setGroupState] = React.useState(false);

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
      <Checkbox state={groupState} setState={setGroupState}>
        Fruits
      </Checkbox>
      <div className="flex flex-col pl-6 mt-1">
        {values.map((value, i) => {
          return (
            <Checkbox
              key={i}
              state={itemState}
              setState={setItemState}
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
