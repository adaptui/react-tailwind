import * as React from "react";

import { Checkbox, CheckboxGroup, CheckboxProps } from "../../index";

export type CheckboxGroupStackProps = CheckboxProps & {};

export const CheckboxGroupStack: React.FC<CheckboxGroupStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <CheckboxGroup aria-label="checkbox small example" stack="horizontal">
        <Checkbox size="sm" {...props} />
        <Checkbox size="sm" {...props} />
        <Checkbox size="sm" {...props} />
      </CheckboxGroup>
      <CheckboxGroup aria-label="checkbox medium example" stack="horizontal">
        <Checkbox size="md" defaultState={true} {...props} />
        <Checkbox size="md" defaultState={true} {...props} />
        <Checkbox size="md" defaultState={true} {...props} />
      </CheckboxGroup>
      <CheckboxGroup aria-label="checkbox large example" stack="horizontal">
        <Checkbox size="lg" defaultState="indeterminate" {...props} />
        <Checkbox size="lg" defaultState="indeterminate" {...props} />
        <Checkbox size="lg" defaultState="indeterminate" {...props} />
      </CheckboxGroup>
    </div>
  );
};

export default CheckboxGroupStack;
