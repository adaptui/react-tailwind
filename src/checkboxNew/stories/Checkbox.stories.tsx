import { cx } from "@renderlesskit/react";
import { useEffect, useMemo, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
// @ts-ignore
import { withPseudoState } from "storybook-addon-pseudo-states/dist/withPseudoState";

import {
  CheckboxIcon,
  CheckboxText,
  CheckboxLabel,
  CheckboxInput,
  useCheckboxState,
  CheckboxState,
  CheckboxDescription,
  CheckboxInitialState,
} from "../index";
import { Button } from "../../button";
import { withIconA11y } from "../../utils";
import { CheckboxInputHTMLProps } from "../CheckboxInput";
import { CloseIcon, EyeClose, EyeOpen } from "../../icons";
import { createControls } from "../../../.storybook/storybookUtils";
import { Checkbox, CheckboxProps, useCheckboxProps } from "../Checkbox";

export default {
  title: "Forms/CheckboxNew",
  component: Checkbox,
  argTypes: createControls("checkbox", {
    ignore: [
      "unstable_system",
      "unstable_clickOnEnter",
      "unstable_clickOnSpace",
      "wrapElement",
      "focusable",
      "as",
      "setState",
      "checked",
      "value",
      "defaultState",
      "state",
      "onStateChange",
      "icon",
    ],
  }),
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = {
  args: { size: "md", defaultState: false },
  parameters: { options: { showPanel: true } },
  argTypes: {
    description: { table: { disable: true } },
  },
};

export const Small: ComponentStory<typeof Checkbox> = {
  ...Default,
  args: { ...Default.args, size: "sm" },
  argTypes: {
    ...Default.argTypes,
    size: { table: { disable: true } },
  },
};
export const Medium: ComponentStory<typeof Checkbox> = {
  ...Default,
  argTypes: {
    ...Default.argTypes,
    size: { table: { disable: true } },
  },
};
export const Large: ComponentStory<typeof Checkbox> = {
  ...Default,
  args: { ...Default.args, size: "lg" },
  argTypes: {
    ...Default.argTypes,
    size: { table: { disable: true } },
  },
};

export const UnChecked: ComponentStory<typeof Checkbox> = {
  ...Default,
};
export const Checked: ComponentStory<typeof Checkbox> = {
  ...Default,
  args: { ...Default.args, defaultState: true },
};
export const Indeterminate: ComponentStory<typeof Checkbox> = {
  ...Default,
  args: { ...Default.args, defaultState: "indeterminate" },
};

export const CheckboxStack: ComponentStory<typeof Checkbox> = {
  render: args => {
    return (
      <div className="flex flex-col space-y-2">
        <div className="space-x-2">
          <Checkbox size="sm" {...args} />
          <Checkbox size="md" {...args} />
          <Checkbox size="lg" {...args} />
        </div>
        <div className="space-x-2">
          <Checkbox size="sm" defaultState={true} {...args} />
          <Checkbox size="md" defaultState={true} {...args} />
          <Checkbox size="lg" defaultState={true} {...args} />
        </div>
        <div className="space-x-2">
          <Checkbox size="sm" defaultState="indeterminate" {...args} />
          <Checkbox size="md" defaultState="indeterminate" {...args} />
          <Checkbox size="lg" defaultState="indeterminate" {...args} />
        </div>
      </div>
    );
  },
  argTypes: {
    ...Default.argTypes,
    disabled: { table: { disable: false } },
    size: { table: { disable: true } },
  },
  decorators: [withPseudoState],
  parameters: { options: { showPanel: true } },
};

export const HoverStack: ComponentStory<typeof Checkbox> = {
  ...CheckboxStack,
  parameters: { options: { showPanel: false }, pseudo: { hover: true } },
};
export const ActiveStack: ComponentStory<typeof Checkbox> = {
  ...CheckboxStack,
  parameters: { options: { showPanel: false }, pseudo: { active: true } },
};
export const FocusStack: ComponentStory<typeof Checkbox> = {
  ...CheckboxStack,
  parameters: { options: { showPanel: false }, pseudo: { focusVisible: true } },
};
export const DisabledStack: ComponentStory<typeof Checkbox> = {
  ...CheckboxStack,
  args: { disabled: true },
  parameters: { options: { showPanel: false } },
};

export const WithLabelStack: ComponentStory<typeof Checkbox> = {
  render: args => {
    return (
      <div className="flex flex-col space-y-4">
        <div className="space-x-4">
          <Checkbox children="Checkbox" size="sm" {...args} />
          <Checkbox children="Checkbox" size="md" {...args} />
          <Checkbox children="Checkbox" size="lg" {...args} />
        </div>
        <div className="space-x-4">
          <Checkbox
            children="Checkbox"
            size="sm"
            defaultState={true}
            {...args}
          />
          <Checkbox
            children="Checkbox"
            size="md"
            defaultState={true}
            {...args}
          />
          <Checkbox
            children="Checkbox"
            size="lg"
            defaultState={true}
            {...args}
          />
        </div>
        <div className="space-x-4">
          <Checkbox
            children="Checkbox"
            size="sm"
            defaultState="indeterminate"
            {...args}
          />
          <Checkbox
            children="Checkbox"
            size="md"
            defaultState="indeterminate"
            {...args}
          />
          <Checkbox
            children="Checkbox"
            size="lg"
            defaultState="indeterminate"
            {...args}
          />
        </div>
      </div>
    );
  },
  argTypes: {
    disabled: { table: { disable: false } },
    size: { table: { disable: true } },
    description: { table: { disable: true } },
  },
  decorators: [withPseudoState],
  parameters: { options: { showPanel: true } },
};

export const WithDescriptionStack: ComponentStory<typeof Checkbox> = {
  render: args => {
    return (
      <div className="flex flex-col space-y-8">
        <div className="max-w-xs space-y-4">
          <Checkbox
            children="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="sm"
            {...args}
          />
          <Checkbox
            children="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="md"
            {...args}
          />
          <Checkbox
            children="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="lg"
            {...args}
          />
        </div>
        <div className="max-w-xs space-y-4">
          <Checkbox
            children="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="sm"
            defaultState={true}
            {...args}
          />
          <Checkbox
            children="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="md"
            defaultState={true}
            {...args}
          />
          <Checkbox
            children="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="lg"
            defaultState={true}
            {...args}
          />
        </div>
        <div className="max-w-xs space-y-4">
          <Checkbox
            children="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="sm"
            defaultState="indeterminate"
            {...args}
          />
          <Checkbox
            children="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="md"
            defaultState="indeterminate"
            {...args}
          />
          <Checkbox
            children="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="lg"
            defaultState="indeterminate"
            {...args}
          />
        </div>
      </div>
    );
  },
  argTypes: {
    disabled: { table: { disable: false } },
    size: { table: { disable: true } },
    description: { table: { disable: true } },
  },
  decorators: [withPseudoState],
  parameters: { options: { showPanel: true } },
};

export const Controlled = () => {
  const [state, setState] =
    useState<NonNullable<CheckboxProps["state"]>>(false);

  return (
    <div className="flex flex-col space-y-4">
      <Checkbox state={state} onStateChange={setState} />

      <div className="flex flex-col space-y-2">
        <Button onClick={() => setState(true)}>
          {`${state === true ? "Now" : "Change to"} Checked`}
        </Button>

        <Button onClick={() => setState(false)}>
          {`${state === false ? "Now" : "Change to"} UnChecked`}
        </Button>

        <Button onClick={() => setState("indeterminate")}>
          {`${state === "indeterminate" ? "Now" : "Change to"} Interderminate`}
        </Button>
      </div>
    </div>
  );
};
Controlled.parameters = { options: { showPanel: false } };

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const Group = () => {
  const [state, setState] = useState<NonNullable<CheckboxProps["state"]>>([]);

  if (!Array.isArray(state)) return;

  return (
    <div className="flex flex-col space-y-4 min-h-96">
      <div className="text-xl font-bold">Pick fruits to eat</div>
      <div className="space-x-2">
        <Checkbox
          state={state}
          onStateChange={setState}
          value="apple"
          children="Apple"
        />
        <Checkbox
          state={state}
          onStateChange={setState}
          className="ml-2"
          value="orange"
          children="Orange"
        />
        <Checkbox
          state={state}
          onStateChange={setState}
          className="ml-2"
          value="watermelon"
          children="Watermelon"
        />
      </div>
      {state.length > 0 ? (
        <div>
          <div className="font-semibold">Picked fruits:</div>
          <ul>
            {state.map((fruit, index) => (
              <li key={fruit}>{`- ${capitalizeFirstLetter(
                fruit as string,
              )}`}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
Group.parameters = { options: { showPanel: false } };

export const GroupBooleanState = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <div className="flex flex-col space-y-4">
      <Checkbox
        state={isIndeterminate ? "indeterminate" : allChecked}
        onStateChange={value =>
          setCheckedItems([
            value as boolean,
            value as boolean,
            value as boolean,
          ])
        }
        children="Check all items"
        className="self-start"
      />
      <div className="space-x-2">
        <Checkbox
          state={checkedItems[0]}
          onStateChange={value =>
            setCheckedItems([
              value as boolean,
              checkedItems[1],
              checkedItems[2],
            ])
          }
          children="Item 1"
        />
        <Checkbox
          state={checkedItems[1]}
          onStateChange={value =>
            setCheckedItems([
              checkedItems[0],
              value as boolean,
              checkedItems[2],
            ])
          }
          children="Item 2"
        />
        <Checkbox
          state={checkedItems[2]}
          onStateChange={value =>
            setCheckedItems([
              checkedItems[0],
              checkedItems[1],
              value as boolean,
            ])
          }
          children="Item 3"
        />
      </div>
    </div>
  );
};
GroupBooleanState.parameters = { options: { showPanel: false } };

export const GroupStringState = () => {
  const values = useMemo(() => ["Apple", "Orange", "Watermelon"], []);
  const [itemState, setItemState] = useState<
    NonNullable<CheckboxProps["state"]>
  >([]);
  const [groupState, setGroupState] =
    useState<NonNullable<CheckboxProps["state"]>>(false);

  const isAllChecked = groupState === true;
  const isIndeterminate = groupState === "indeterminate";

  // updates items when group is toggled
  useEffect(() => {
    if (groupState === true) {
      setItemState(values);
    } else if (groupState === false) {
      setItemState([]);
    }
  }, [groupState, values]);

  // updates group when items is toggled
  useEffect(() => {
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
    <div className="flex flex-col space-y-4">
      <Checkbox
        state={groupState}
        onStateChange={setGroupState}
        children={
          isIndeterminate
            ? "Fruit in the basket"
            : isAllChecked
            ? "Basket full"
            : "Basket empty"
        }
        className="self-start"
      />
      <div className="space-x-2">
        {values.map((value, i) => {
          return (
            <Checkbox
              key={i}
              state={itemState}
              onStateChange={setItemState}
              value={value}
              children={capitalizeFirstLetter(value)}
            />
          );
        })}
      </div>
    </div>
  );
};
GroupStringState.parameters = { options: { showPanel: false } };

export const CustomIcon = () => {
  return (
    <Checkbox
      size="lg"
      icon={state => (
        <>
          {state.isUnchecked ? withIconA11y(<EyeClose />) : null}
          {state.isChecked ? withIconA11y(<EyeOpen />) : null}
        </>
      )}
      children="Custom Icons"
    />
  );
};
CustomIcon.parameters = { options: { showPanel: false } };

export const CustomSimple = () => {
  const state = useCheckboxState();

  return (
    <CheckboxLabel {...state}>
      <CheckboxInput {...state} />
      <CheckboxIcon
        {...state}
        className={cx(
          state.isChecked
            ? "bg-red-500 peer-hover:bg-red-400 peer-active:bg-red-600 "
            : "",
          "peer-focus-visible:ring-orange-400",
        )}
      >
        {state.isChecked ? withIconA11y(<CloseIcon />) : null}
      </CheckboxIcon>
      <div className="flex">
        <CheckboxText {...state} className="text-pink-600">
          Custom Checkbox
        </CheckboxText>
        <CheckboxDescription
          as="span"
          {...state}
          className="self-center mt-0 ml-2 text-xs text-emarald-600"
        >
          Custom Description
        </CheckboxDescription>
      </div>
    </CheckboxLabel>
  );
};
CustomSimple.parameters = { options: { showPanel: false } };

type CustomCheckboxProps = CheckboxInputHTMLProps & CheckboxInitialState;

const CustomCheckbox: React.FC<CustomCheckboxProps> = props => {
  const [state, checkboxProps] = useCheckboxProps(props);
  const { className, children, ...inputProps } = checkboxProps;

  return (
    <CheckboxLabel
      {...state}
      className={cx("px-8 py-2 border-2 border-blue-500 rounded", className)}
    >
      <CheckboxInput {...state} {...inputProps} />
      {state.isChecked ? (
        <CheckboxIcon className="text-blue-500 absolute inset-y-0 left-0 flex items-center pl-1.5">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            role="img"
            focusable={false}
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </CheckboxIcon>
      ) : null}
      <span className="select-none">{children}</span>
    </CheckboxLabel>
  );
};

export const CustomAdvanced = () => {
  const [state, onStateChange] = useState<CheckboxState["state"]>([]);

  return (
    <>
      <CustomCheckbox value="one" state={state} onStateChange={onStateChange}>
        Button one 😁
      </CustomCheckbox>
      <CustomCheckbox
        className="ml-2"
        value="two"
        state={state}
        onStateChange={onStateChange}
      >
        Button two 🤓
      </CustomCheckbox>
      <CustomCheckbox
        className="ml-2"
        value="three"
        state={state}
        onStateChange={onStateChange}
      >
        Button three 👻
      </CustomCheckbox>
    </>
  );
};
CustomAdvanced.parameters = { options: { showPanel: false } };
