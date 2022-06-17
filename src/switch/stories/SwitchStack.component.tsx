import * as React from "react";
import { Group } from "ariakit";

import { Switch, SwitchProps } from "../../index";

export type SwitchStackProps = SwitchProps & {};

export const SwitchStack: React.FC<SwitchStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4">
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="switch small example"
        >
          <Switch size="sm" themeColor="base" {...props} />
          <Switch size="sm" themeColor="base" defaultValue={true} {...props} />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="switch medium example"
        >
          <Switch size="md" themeColor="base" {...props} />
          <Switch size="md" themeColor="base" defaultValue={true} {...props} />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="switch large example"
        >
          <Switch size="lg" themeColor="base" {...props} />
          <Switch size="lg" themeColor="base" defaultValue={true} {...props} />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="switch extra large example"
        >
          <Switch size="xl" themeColor="base" {...props} />
          <Switch size="xl" themeColor="base" defaultValue={true} {...props} />
        </Group>
      </div>
      <div className="flex flex-col space-y-4">
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="switch small example"
        >
          <Switch size="sm" themeColor="primary" {...props} />
          <Switch
            size="sm"
            themeColor="primary"
            defaultValue={true}
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="switch medium example"
        >
          <Switch size="md" themeColor="primary" {...props} />
          <Switch
            size="md"
            themeColor="primary"
            defaultValue={true}
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="switch large example"
        >
          <Switch size="lg" themeColor="primary" {...props} />
          <Switch
            size="lg"
            themeColor="primary"
            defaultValue={true}
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="switch extra large example"
        >
          <Switch size="xl" themeColor="primary" {...props} />
          <Switch
            size="xl"
            themeColor="primary"
            defaultValue={true}
            {...props}
          />
        </Group>
      </div>
    </div>
  );
};

export default SwitchStack;
