import * as React from "react";
import { Group } from "reakit";

import { Checkbox, CheckboxProps } from "../../index";

export type CheckboxStackProps = CheckboxProps & {};

export const CheckboxStack: React.FC<CheckboxStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <Group
        className="flex flex-row space-x-4 w-fit"
        aria-label="Checkbox small example"
      >
        <Checkbox size="sm" {...props} />
        <Checkbox size="sm" defaultState={true} {...props} />
        <Checkbox size="sm" defaultState={"indeterminate"} {...props} />
      </Group>
      <Group
        className="flex flex-row space-x-4 w-fit"
        aria-label="Checkbox medium example"
      >
        <Checkbox size="md" {...props} />
        <Checkbox size="md" defaultState={true} {...props} />
        <Checkbox size="md" defaultState={"indeterminate"} {...props} />
      </Group>
      <Group
        className="flex flex-row space-x-4 w-fit"
        aria-label="Checkbox large example"
      >
        <Checkbox size="lg" {...props} />
        <Checkbox size="lg" defaultState={true} {...props} />
        <Checkbox size="lg" defaultState={"indeterminate"} {...props} />
      </Group>
    </div>
  );
};

export default CheckboxStack;
