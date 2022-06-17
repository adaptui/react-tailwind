import * as React from "react";

import { Checkbox, CheckboxGroup, CheckboxProps } from "../../index";

export type CheckboxGroupStackProps = CheckboxProps & {};

export const CheckboxGroupStack: React.FC<CheckboxGroupStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4">
        <CheckboxGroup aria-label="checkbox small example" stack="horizontal">
          <Checkbox size="sm" themeColor="base" {...props} />
          <Checkbox size="sm" themeColor="base" {...props} />
          <Checkbox size="sm" themeColor="base" {...props} />
        </CheckboxGroup>
        <CheckboxGroup
          aria-label="checkbox medium example"
          stack="horizontal"
          defaultValue={true}
        >
          <Checkbox size="md" themeColor="base" {...props} />
          <Checkbox size="md" themeColor="base" {...props} />
          <Checkbox size="md" themeColor="base" {...props} />
        </CheckboxGroup>
        <CheckboxGroup
          aria-label="checkbox large example"
          stack="horizontal"
          defaultValue="mixed"
        >
          <Checkbox size="lg" themeColor="base" {...props} />
          <Checkbox size="lg" themeColor="base" {...props} />
          <Checkbox size="lg" themeColor="base" {...props} />
        </CheckboxGroup>
      </div>
      <div className="flex flex-col space-y-4">
        <CheckboxGroup aria-label="checkbox small example" stack="horizontal">
          <Checkbox size="sm" themeColor="primary" {...props} />
          <Checkbox size="sm" themeColor="primary" {...props} />
          <Checkbox size="sm" themeColor="primary" {...props} />
        </CheckboxGroup>
        <CheckboxGroup
          aria-label="checkbox medium example"
          stack="horizontal"
          defaultValue={true}
        >
          <Checkbox size="md" themeColor="primary" {...props} />
          <Checkbox size="md" themeColor="primary" {...props} />
          <Checkbox size="md" themeColor="primary" {...props} />
        </CheckboxGroup>
        <CheckboxGroup
          aria-label="checkbox large example"
          stack="horizontal"
          defaultValue="mixed"
        >
          <Checkbox size="lg" themeColor="primary" {...props} />
          <Checkbox size="lg" themeColor="primary" {...props} />
          <Checkbox size="lg" themeColor="primary" {...props} />
        </CheckboxGroup>
      </div>
      <div className="flex flex-col space-y-4">
        <CheckboxGroup aria-label="checkbox small example" stack="horizontal">
          <Checkbox size="sm" themeColor="danger" {...props} />
          <Checkbox size="sm" themeColor="danger" {...props} />
          <Checkbox size="sm" themeColor="danger" {...props} />
        </CheckboxGroup>
        <CheckboxGroup
          aria-label="checkbox medium example"
          stack="horizontal"
          defaultValue={true}
        >
          <Checkbox size="md" themeColor="danger" {...props} />
          <Checkbox size="md" themeColor="danger" {...props} />
          <Checkbox size="md" themeColor="danger" {...props} />
        </CheckboxGroup>
        <CheckboxGroup
          aria-label="checkbox large example"
          stack="horizontal"
          defaultValue="mixed"
        >
          <Checkbox size="lg" themeColor="danger" {...props} />
          <Checkbox size="lg" themeColor="danger" {...props} />
          <Checkbox size="lg" themeColor="danger" {...props} />
        </CheckboxGroup>
      </div>
    </div>
  );
};

export default CheckboxGroupStack;
