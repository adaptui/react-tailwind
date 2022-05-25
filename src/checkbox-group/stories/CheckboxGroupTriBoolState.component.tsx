import * as React from "react";

import { Checkbox, CheckboxGroup } from "../../index";

export type CheckboxGroupTriBoolStateProps = {};

export const CheckboxGroupTriBoolState: React.FC<
  CheckboxGroupTriBoolStateProps
> = () => {
  const [checkedItems, setCheckedItems] = React.useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <CheckboxGroup
      aria-label="Tristate checkbox using boolean values"
      withState={false}
    >
      <Checkbox
        value={isIndeterminate ? "mixed" : allChecked}
        setValue={value =>
          setCheckedItems([
            value as boolean,
            value as boolean,
            value as boolean,
          ])
        }
        label="Check all items"
        aria-controls="check1 check2 check3"
      />
      <CheckboxGroup
        role="presentation"
        aria-label="For presentation"
        stack="horizontal"
        withState={false}
      >
        <Checkbox
          value={checkedItems[0]}
          setValue={value => {
            console.log("%cvalue", "color: #9c66cc", value);
            setCheckedItems([
              value as boolean,
              checkedItems[1],
              checkedItems[2],
            ]);
          }}
          label="Item 1"
          id="check1"
        />
        <Checkbox
          value={checkedItems[1]}
          setValue={value =>
            setCheckedItems([
              checkedItems[0],
              value as boolean,
              checkedItems[2],
            ])
          }
          label="Item 2"
          id="check2"
        />
        <Checkbox
          value={checkedItems[2]}
          setValue={value =>
            setCheckedItems([
              checkedItems[0],
              checkedItems[1],
              value as boolean,
            ])
          }
          label="Item 3"
          id="check3"
        />
      </CheckboxGroup>
    </CheckboxGroup>
  );
};

export default CheckboxGroupTriBoolState;
