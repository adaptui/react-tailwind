import * as React from "react";

import {
  Checkbox,
  CheckboxGroup,
  CheckboxGroupProps,
  Value,
} from "../../index";

export type CheckboxGroupBasicProps = CheckboxGroupProps & {};

export const CheckboxGroupBasic: React.FC<CheckboxGroupBasicProps> = props => {
  const [value, setValue] = React.useState<Value>([]);

  if (!Array.isArray(value)) return null;

  return (
    <div className="flex min-h-96 flex-col space-y-4">
      <div className="text-xl font-bold" id="label">
        Pick fruits to eat
      </div>
      <CheckboxGroup
        aria-labelledby="label"
        value={value}
        setValue={setValue}
        {...props}
      >
        <Checkbox inputValue="apple" label="Apple" />
        <Checkbox inputValue="orange" label="Orange" />
        <Checkbox inputValue="watermelon" label="Watermelon" />
        <Checkbox inputValue="sapota" label="Sapota" />
        <Checkbox inputValue="cherry" label="Cherry" />
      </CheckboxGroup>
      {value.length > 0 ? (
        <div>
          <div className="font-semibold">Picked fruits:</div>
          <ul>
            {value.map((fruit, index) => (
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

export default CheckboxGroupBasic;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
