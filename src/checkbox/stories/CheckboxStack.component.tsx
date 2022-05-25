import * as React from "react";
import { Group } from "reakit";

import { Checkbox, CheckboxProps } from "../../index";

export type CheckboxStackProps = CheckboxProps & {};

export const CheckboxStack: React.FC<CheckboxStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <Group
        className="flex w-fit flex-row space-x-4"
        aria-label="Checkbox small example"
      >
        <Checkbox size="sm" {...props} />
        <Checkbox size="sm" defaultValue={true} {...props} />
        <Checkbox size="sm" defaultValue={"mixed"} {...props} />
      </Group>
      <Group
        className="flex w-fit flex-row space-x-4"
        aria-label="Checkbox medium example"
      >
        <Checkbox size="md" {...props} />
        <Checkbox size="md" defaultValue={true} {...props} />
        <Checkbox size="md" defaultValue={"mixed"} {...props} />
      </Group>
      <Group
        className="flex w-fit flex-row space-x-4"
        aria-label="Checkbox large example"
      >
        <Checkbox size="lg" {...props} />
        <Checkbox size="lg" defaultValue={true} {...props} />
        <Checkbox size="lg" defaultValue={"mixed"} {...props} />
      </Group>
    </div>
  );
};

export default CheckboxStack;
