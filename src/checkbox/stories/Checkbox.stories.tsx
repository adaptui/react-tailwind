import React from "react";
import { cx } from "@renderlesskit/react";
import { Meta } from "@storybook/react/types-6-0";

import {
  Checkbox,
  CheckboxInput,
  CheckboxLabel,
  CheckboxProps,
  CheckboxStateProps,
  CheckboxStatus,
  CheckboxIcon,
  CheckboxText,
} from "../Checkbox";
import {
  createUnionControl,
  storyTemplate,
} from "../../../.storybook/storybookUtils";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    size: createUnionControl({
      xs: "xs",
      sm: "sm",
      lg: "lg",
    }),
    defaultState: {
      control: {
        type: "inline-radio",
        options: [true, false, "indeterminate"],
      },
    },
    disabled: { control: { type: "boolean" } },
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

export const Disabled = base({ disabled: true });

export const Controlled = storyTemplate<CheckboxProps>(args => {
  const [state, onStateChange] = React.useState<CheckboxStatus>(false);

  return (
    <>
      <Checkbox state={state} onStateChange={onStateChange} {...args}>
        Checkbox
      </Checkbox>
      <div className="mt-2">{`Checked: ${state}`}</div>
    </>
  );
})({ size: "sm" });

export const Group = storyTemplate<CheckboxProps>(args => {
  const [state, onStateChange] = React.useState<CheckboxStatus>([]);

  return (
    <>
      <div className="mb-2">Choices: {(state as string[]).join(", ")}</div>
      <Checkbox
        state={state}
        onStateChange={onStateChange}
        value="apple"
        {...args}
      >
        Apple
      </Checkbox>
      <Checkbox
        state={state}
        onStateChange={onStateChange}
        className="ml-2"
        value="orange"
        {...args}
      >
        Orange
      </Checkbox>
      <Checkbox
        state={state}
        onStateChange={onStateChange}
        className="ml-2"
        value="watermelon"
        {...args}
      >
        Watermelon
      </Checkbox>
    </>
  );
})({ size: "sm" });

export const GroupIndeterminateSimple = () => {
  const [checkedItems, setCheckedItems] = React.useState<CheckboxStatus[]>([
    false,
    false,
  ]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        state={isIndeterminate ? "indeterminate" : allChecked}
        onStateChange={value => setCheckedItems([value, value])}
      >
        Parent Checkbox
      </Checkbox>
      <div className="flex flex-col pl-6 mt-1">
        <Checkbox
          state={checkedItems[0]}
          onStateChange={value => setCheckedItems([value, checkedItems[1]])}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          state={checkedItems[1]}
          onStateChange={value => setCheckedItems([checkedItems[0], value])}
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

const CheckboxCustom = (props: any) => {
  const [
    checkboxState,
    setCheckboxStateChange,
  ] = React.useState<CheckboxStatus>(true);
  const state: CheckboxStateProps = {
    state: checkboxState,
    setState: setCheckboxStateChange,
    size: "sm",
    value: "one",
    disabled: false,
  };

  return (
    <CheckboxLabel {...state}>
      <CheckboxInput {...state} />
      <CheckboxIcon
        {...state}
        className="w-8 h-8 text-2xl text-white bg-blue-500"
      />
      <CheckboxText className="text-orange-500" {...state}>
        Custom Checkbox
      </CheckboxText>
    </CheckboxLabel>
  );
};

export const CustomCheckbox = () => {
  return <CheckboxCustom />;
};

// Inspired from https://codepen.io/geertsdev/pen/yLaGLJq
const CheckboxCustomComplete = (props: any) => {
  const { children, className, state, setState, value, ...rest } = props;

  return (
    <CheckboxLabel
      className={cx("px-8 py-2 border-2 border-blue-500 rounded", className)}
      {...rest}
    >
      <CheckboxInput state={state} setState={setState} value={value} />
      {state.includes(value) ? (
        <span
          aris-hidden="true"
          role="img"
          className="text-blue-500 absolute inset-y-0 left-0 flex items-center pl-1.5"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      ) : null}
      <span className="select-none">{children}</span>
    </CheckboxLabel>
  );
};

export const CompleteCustomCheckbox = () => {
  const [state, onStateChange] = React.useState<CheckboxStatus>([]);

  return (
    <>
      <CheckboxCustomComplete
        value="one"
        state={state}
        setState={onStateChange}
      >
        Button one 😁
      </CheckboxCustomComplete>
      <CheckboxCustomComplete
        className="ml-2"
        value="two"
        state={state}
        setState={onStateChange}
      >
        Button two 🤓
      </CheckboxCustomComplete>
      <CheckboxCustomComplete
        className="ml-2"
        value="three"
        state={state}
        setState={onStateChange}
      >
        Button three 👻
      </CheckboxCustomComplete>
    </>
  );
};
