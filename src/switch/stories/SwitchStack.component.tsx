import * as React from "react";
import { Group } from "reakit";

import { Switch, SwitchProps } from "../../index";

export type SwitchStackProps = SwitchProps & {};

export const SwitchStack: React.FC<SwitchStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <Group
        className="flex flex-row space-x-4 w-fit"
        aria-label="switch small example"
      >
        <Switch size="sm" {...props} />
        <Switch size="sm" defaultState={true} {...props} />
      </Group>
      <Group
        className="flex flex-row space-x-4 w-fit"
        aria-label="switch medium example"
      >
        <Switch size="md" {...props} />
        <Switch size="md" defaultState={true} {...props} />
      </Group>
      <Group
        className="flex flex-row space-x-4 w-fit"
        aria-label="switch large example"
      >
        <Switch size="lg" {...props} />
        <Switch size="lg" defaultState={true} {...props} />
      </Group>
      <Group
        className="flex flex-row space-x-4 w-fit"
        aria-label="switch extra large example"
      >
        <Switch size="xl" {...props} />
        <Switch size="xl" defaultState={true} {...props} />
      </Group>
    </div>
  );
};

export default SwitchStack;
