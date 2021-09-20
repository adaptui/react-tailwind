import { useEffect, useMemo, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { tcm } from "../../utils";

import {
  CheckboxIcon,
  CheckboxLabel,
  CheckboxInput,
  CheckboxState,
  CheckboxInitialState,
  CheckboxText,
  CheckboxDescription,
} from "../index";
import { Button } from "../../button";
import { withIconA11y } from "../../utils";
import { EyeClose, EyeOpen } from "../../icons";
import { useCheckboxStateSplit } from "../helpers";
import { CheckboxInputHTMLProps } from "../CheckboxInput";
import { createControls } from "../../../.storybook/utils";
import { Checkbox, CheckboxOwnProps, CheckboxProps } from "../Checkbox";

type Meta = ComponentMeta<typeof Checkbox>;
type Story = ComponentStory<typeof Checkbox>;

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: { type: "text" } },
    description: { control: { type: "text" } },
    ...createControls("checkbox", {
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
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story = {
  args: { size: "md", defaultState: false },
  parameters: { options: { showPanel: true } },
};

export const Small: Story = {
  ...Default,
  args: { ...Default.args, size: "sm" },
  argTypes: {
    ...Default.argTypes,
    size: { table: { disable: true } },
  },
};
export const Medium: Story = {
  ...Default,
  argTypes: {
    ...Default.argTypes,
    size: { table: { disable: true } },
  },
};
export const Large: Story = {
  ...Default,
  args: { ...Default.args, size: "lg" },
  argTypes: {
    ...Default.argTypes,
    size: { table: { disable: true } },
  },
};

export const UnChecked: Story = { ...Default };
export const Checked: Story = {
  ...Default,
  args: { ...Default.args, defaultState: true },
};
export const Indeterminate: Story = {
  ...Default,
  args: { ...Default.args, defaultState: "indeterminate" },
};

export const CheckboxStack: Story = {
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
  parameters: { options: { showPanel: true } },
};

export const DisabledStack: Story = {
  ...CheckboxStack,
  args: { disabled: true },
  parameters: { options: { showPanel: false } },
};

export const WithLabelStack: Story = {
  render: args => {
    return (
      <div className="flex flex-col space-y-4">
        <div className="space-x-4">
          <Checkbox label="Checkbox" size="sm" {...args} />
          <Checkbox label="Checkbox" size="md" {...args} />
          <Checkbox label="Checkbox" size="lg" {...args} />
        </div>
        <div className="space-x-4">
          <Checkbox label="Checkbox" size="sm" defaultState={true} {...args} />
          <Checkbox label="Checkbox" size="md" defaultState={true} {...args} />
          <Checkbox label="Checkbox" size="lg" defaultState={true} {...args} />
        </div>
        <div className="space-x-4">
          <Checkbox
            label="Checkbox"
            size="sm"
            defaultState="indeterminate"
            {...args}
          />
          <Checkbox
            label="Checkbox"
            size="md"
            defaultState="indeterminate"
            {...args}
          />
          <Checkbox
            label="Checkbox"
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
  },
  parameters: { options: { showPanel: true } },
};

export const WithDescriptionStack: Story = {
  render: args => {
    return (
      <div className="flex flex-col space-y-8">
        <div className="max-w-xs space-y-4">
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="sm"
            {...args}
          />
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="md"
            {...args}
          />
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="lg"
            {...args}
          />
        </div>
        <div className="max-w-xs space-y-4">
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="sm"
            defaultState={true}
            {...args}
          />
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="md"
            defaultState={true}
            {...args}
          />
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="lg"
            defaultState={true}
            {...args}
          />
        </div>
        <div className="max-w-xs space-y-4">
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="sm"
            defaultState="indeterminate"
            {...args}
          />
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="md"
            defaultState="indeterminate"
            {...args}
          />
          <Checkbox
            label="Checkbox"
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
  },
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
          label="Apple"
        />
        <Checkbox
          state={state}
          onStateChange={setState}
          className="ml-2"
          value="orange"
          label="Orange"
        />
        <Checkbox
          state={state}
          onStateChange={setState}
          className="ml-2"
          value="watermelon"
          label="Watermelon"
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
        label="Check all items"
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
          label="Item 1"
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
          label="Item 2"
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
          label="Item 3"
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
        label={
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
              label={capitalizeFirstLetter(value)}
            />
          );
        })}
      </div>
    </div>
  );
};
GroupStringState.parameters = { options: { showPanel: false } };

const CustomIconElement: CheckboxOwnProps["icon"] = state => (
  <>
    {state.isUnchecked ? withIconA11y(<EyeClose />) : null}
    {state.isChecked ? withIconA11y(<EyeOpen />) : null}
  </>
);

export const CustomIcon = () => {
  return <Checkbox size="lg" icon={CustomIconElement} label="Custom Icons" />;
};
CustomIcon.parameters = { options: { showPanel: false } };

export const CustomSimple = () => {
  return (
    // These values will be overridden if the children are passed in respectively
    <Checkbox
      icon={CustomIconElement}
      label="Checkbox"
      description="Fruits in the basket"
    >
      <CheckboxLabel className="p-2 border-2 border-blue-500 rounded" />
      <CheckboxIcon className="bg-red-500">{CustomIconElement}</CheckboxIcon>
      <CheckboxText className="text-green-500">New Checkbox</CheckboxText>
      <CheckboxDescription className="text-orange-500">
        New Description
      </CheckboxDescription>
    </Checkbox>
  );
};
CustomSimple.parameters = { options: { showPanel: false } };

export const CustomSimpleV2 = () => {
  return (
    <Checkbox label="Checkbox" description="Fruits in the basket">
      {state => {
        return (
          <>
            <CheckboxLabel className="p-2 border-2 border-blue-500 rounded" />
            <CheckboxIcon
              className={
                state.isChecked
                  ? "bg-red-500 peer-hover:bg-red-400"
                  : "bg-green-500 peer-hover:bg-green-400"
              }
            >
              <>
                {state.isUnchecked ? withIconA11y(<EyeClose />) : null}
                {state.isChecked ? withIconA11y(<EyeOpen />) : null}
              </>
            </CheckboxIcon>
            <CheckboxText className="text-green-500">
              Overidden Label
            </CheckboxText>
            <CheckboxDescription className="text-orange-500">
              Overridden Description
            </CheckboxDescription>
          </>
        );
      }}
    </Checkbox>
  );
};
CustomSimpleV2.parameters = { options: { showPanel: false } };

type CustomCheckboxProps = CheckboxInputHTMLProps & CheckboxInitialState;

const CustomCheckbox: React.FC<CustomCheckboxProps> = props => {
  const [state, checkboxProps] = useCheckboxStateSplit(props);
  const { className, children, ...inputProps } = checkboxProps;

  return (
    <CheckboxLabel
      {...state}
      className={tcm("px-8 py-2 border-2 border-blue-500 rounded", className)}
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
