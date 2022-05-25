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
      <CheckboxGroup
        aria-label="checkbox medium example"
        stack="horizontal"
        defaultValue={true}
      >
        <Checkbox size="md" {...props} />
        <Checkbox size="md" {...props} />
        <Checkbox size="md" {...props} />
      </CheckboxGroup>
      <CheckboxGroup
        aria-label="checkbox large example"
        stack="horizontal"
        defaultValue="mixed"
      >
        <Checkbox size="lg" {...props} />
        <Checkbox size="lg" {...props} />
        <Checkbox size="lg" {...props} />
      </CheckboxGroup>
    </div>
  );
};

export default CheckboxGroupStack;
