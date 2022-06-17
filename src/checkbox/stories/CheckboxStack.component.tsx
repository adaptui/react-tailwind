import * as React from "react";
import { Group } from "ariakit";

import { Checkbox, CheckboxProps } from "../../index";

export type CheckboxStackProps = CheckboxProps & {};

export const CheckboxStack: React.FC<CheckboxStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4">
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Checkbox small example"
        >
          <Checkbox size="sm" themeColor="base" {...props} />
          <Checkbox
            size="sm"
            themeColor="base"
            defaultValue={true}
            {...props}
          />
          <Checkbox
            size="sm"
            themeColor="base"
            defaultValue={"mixed"}
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Checkbox medium example"
        >
          <Checkbox size="md" themeColor="base" {...props} />
          <Checkbox
            size="md"
            themeColor="base"
            defaultValue={true}
            {...props}
          />
          <Checkbox
            size="md"
            themeColor="base"
            defaultValue={"mixed"}
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Checkbox large example"
        >
          <Checkbox size="lg" themeColor="base" {...props} />
          <Checkbox
            size="lg"
            themeColor="base"
            defaultValue={true}
            {...props}
          />
          <Checkbox
            size="lg"
            themeColor="base"
            defaultValue={"mixed"}
            {...props}
          />
        </Group>
      </div>
      <div className="flex flex-col space-y-4">
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Checkbox small example"
        >
          <Checkbox size="sm" themeColor="primary" {...props} />
          <Checkbox
            size="sm"
            themeColor="primary"
            defaultValue={true}
            {...props}
          />
          <Checkbox
            size="sm"
            themeColor="primary"
            defaultValue={"mixed"}
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Checkbox medium example"
        >
          <Checkbox size="md" themeColor="primary" {...props} />
          <Checkbox
            size="md"
            themeColor="primary"
            defaultValue={true}
            {...props}
          />
          <Checkbox
            size="md"
            themeColor="primary"
            defaultValue={"mixed"}
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Checkbox large example"
        >
          <Checkbox size="lg" themeColor="primary" {...props} />
          <Checkbox
            size="lg"
            themeColor="primary"
            defaultValue={true}
            {...props}
          />
          <Checkbox
            size="lg"
            themeColor="primary"
            defaultValue={"mixed"}
            {...props}
          />
        </Group>
      </div>
      <div className="flex flex-col space-y-4">
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Checkbox small example"
        >
          <Checkbox size="sm" themeColor="danger" {...props} />
          <Checkbox
            size="sm"
            themeColor="danger"
            defaultValue={true}
            {...props}
          />
          <Checkbox
            size="sm"
            themeColor="danger"
            defaultValue={"mixed"}
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Checkbox medium example"
        >
          <Checkbox size="md" themeColor="danger" {...props} />
          <Checkbox
            size="md"
            themeColor="danger"
            defaultValue={true}
            {...props}
          />
          <Checkbox
            size="md"
            themeColor="danger"
            defaultValue={"mixed"}
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Checkbox large example"
        >
          <Checkbox size="lg" themeColor="danger" {...props} />
          <Checkbox
            size="lg"
            themeColor="danger"
            defaultValue={true}
            {...props}
          />
          <Checkbox
            size="lg"
            themeColor="danger"
            defaultValue={"mixed"}
            {...props}
          />
        </Group>
      </div>
    </div>
  );
};

export default CheckboxStack;
