import { ComponentStory, ComponentMeta } from "@storybook/react";
// @ts-ignore
import { withPseudoState } from "storybook-addon-pseudo-states/dist/withPseudoState";

import { Checkbox } from "../Checkbox";
import { createControls } from "../../../.storybook/storybookUtils";
import { useEffect, useMemo, useState } from "react";
import { Button, CheckboxStatus } from "../..";
import { CheckboxProps } from "reakit/ts";

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
};

export const Small: ComponentStory<typeof Checkbox> = {
  ...Default,
  args: { ...Default.args, size: "sm" },
  argTypes: {
    size: { table: { disable: true } },
  },
};
export const Medium: ComponentStory<typeof Checkbox> = {
  ...Default,
  argTypes: {
    size: { table: { disable: true } },
  },
};
export const Large: ComponentStory<typeof Checkbox> = {
  ...Default,
  args: { ...Default.args, size: "lg" },
  argTypes: {
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
          <Checkbox size="sm" />
          <Checkbox size="md" />
          <Checkbox size="lg" />
        </div>
        <div className="space-x-2">
          <Checkbox size="sm" defaultState={true} />
          <Checkbox size="md" defaultState={true} />
          <Checkbox size="lg" defaultState={true} />
        </div>
        <div className="space-x-2">
          <Checkbox size="sm" defaultState="indeterminate" />
          <Checkbox size="md" defaultState="indeterminate" />
          <Checkbox size="lg" defaultState="indeterminate" />
        </div>
      </div>
    );
  },
  argTypes: {
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
export const InvalidStack: ComponentStory<typeof Checkbox> = {
  ...CheckboxStack,
  args: { invalid: true },
  parameters: { options: { showPanel: true } },
};

export const WithLabelStack: ComponentStory<typeof Checkbox> = {
  render: args => {
    return (
      <div className="flex flex-col space-y-4">
        <div className="space-x-4">
          <Checkbox label="Checkbox" size="sm" />
          <Checkbox label="Checkbox" size="md" />
          <Checkbox label="Checkbox" size="lg" />
        </div>
        <div className="space-x-4">
          <Checkbox label="Checkbox" size="sm" defaultState={true} />
          <Checkbox label="Checkbox" size="md" defaultState={true} />
          <Checkbox label="Checkbox" size="lg" defaultState={true} />
        </div>
        <div className="space-x-4">
          <Checkbox label="Checkbox" size="sm" defaultState="indeterminate" />
          <Checkbox label="Checkbox" size="md" defaultState="indeterminate" />
          <Checkbox label="Checkbox" size="lg" defaultState="indeterminate" />
        </div>
      </div>
    );
  },
  argTypes: {
    disabled: { table: { disable: false } },
    size: { table: { disable: true } },
    label: { table: { disable: true } },
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
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="sm"
          />
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="md"
          />
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="lg"
          />
        </div>
        <div className="max-w-xs space-y-4">
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="sm"
            defaultState={true}
          />
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="md"
            defaultState={true}
          />
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="lg"
            defaultState={true}
          />
        </div>
        <div className="max-w-xs space-y-4">
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="sm"
            defaultState="indeterminate"
          />
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="md"
            defaultState="indeterminate"
          />
          <Checkbox
            label="Checkbox"
            description="Used when the checkbox is selected and will use its value for the form submission."
            size="lg"
            defaultState="indeterminate"
          />
        </div>
      </div>
    );
  },
  argTypes: {
    disabled: { table: { disable: false } },
    size: { table: { disable: true } },
    label: { table: { disable: true } },
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
  const [itemState, setItemState] = useState<CheckboxStatus>([]);
  const [groupState, setGroupState] = useState<CheckboxStatus>(false);

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
