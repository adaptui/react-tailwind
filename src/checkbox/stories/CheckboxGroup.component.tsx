import * as React from "react";

import {
  Checkbox,
  CheckboxGroup as RenderlesskitCheckboxGroup,
  CheckboxGroupProps as RenderlesskitCheckboxGroupProps,
  CheckboxProps,
} from "../../index";

export type CheckboxGroupProps = RenderlesskitCheckboxGroupProps & {};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = props => {
  const [state, setState] = React.useState<NonNullable<CheckboxProps["state"]>>(
    [],
  );

  if (!Array.isArray(state)) return null;

  return (
    <div className="flex flex-col space-y-4 min-h-96">
      <div className="text-xl font-bold" id="label">
        Pick fruits to eat
      </div>
      <RenderlesskitCheckboxGroup aria-labelledby="label" {...props}>
        <Checkbox
          state={state}
          onStateChange={setState}
          value="apple"
          label="Apple"
        />
        <Checkbox
          state={state}
          onStateChange={setState}
          value="orange"
          label="Orange"
        />
        <Checkbox
          state={state}
          onStateChange={setState}
          value="watermelon"
          label="Watermelon"
        />
        <Checkbox
          state={state}
          onStateChange={setState}
          value="sapota"
          label="Sapota"
        />
        <Checkbox
          state={state}
          onStateChange={setState}
          value="cherry"
          label="Cherry"
        />
      </RenderlesskitCheckboxGroup>
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

export default CheckboxGroup;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
