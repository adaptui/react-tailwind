import * as React from "react";

import { Checkbox, CheckboxGroup, CheckboxProps } from "../../index";

export type CheckboxStackProps = CheckboxProps & {};

export const CheckboxStack: React.FC<CheckboxStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <CheckboxGroup aria-label="checkbox unchecked example" stack="horizontal">
        <Checkbox size="sm" {...props} />
        <Checkbox size="md" {...props} />
        <Checkbox size="lg" {...props} />
      </CheckboxGroup>
      <CheckboxGroup aria-label="checkbox checked example" stack="horizontal">
        <Checkbox size="sm" defaultState={true} {...props} />
        <Checkbox size="md" defaultState={true} {...props} />
        <Checkbox size="lg" defaultState={true} {...props} />
      </CheckboxGroup>
      <CheckboxGroup
        aria-label="checkbox indeterminate example"
        stack="horizontal"
      >
        <Checkbox size="sm" defaultState="indeterminate" {...props} />
        <Checkbox size="md" defaultState="indeterminate" {...props} />
        <Checkbox size="lg" defaultState="indeterminate" {...props} />
      </CheckboxGroup>
    </div>
  );
};

export default CheckboxStack;
