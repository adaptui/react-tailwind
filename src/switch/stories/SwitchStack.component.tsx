import * as React from "react";
import { Group } from "ariakit";

import { Switch, SwitchProps } from "../../index";

export type SwitchStackProps = SwitchProps & {};

export const SwitchStack: React.FC<SwitchStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <Group
        className="flex w-fit flex-row space-x-4"
        aria-label="switch small example"
      >
        <Switch size="sm" {...props} />
        <Switch size="sm" defaultValue={true} {...props} />
      </Group>
      <Group
        className="flex w-fit flex-row space-x-4"
        aria-label="switch medium example"
      >
        <Switch size="md" {...props} />
        <Switch size="md" defaultValue={true} {...props} />
      </Group>
      <Group
        className="flex w-fit flex-row space-x-4"
        aria-label="switch large example"
      >
        <Switch size="lg" {...props} />
        <Switch size="lg" defaultValue={true} {...props} />
      </Group>
      <Group
        className="flex w-fit flex-row space-x-4"
        aria-label="switch extra large example"
      >
        <Switch size="xl" {...props} />
        <Switch size="xl" defaultValue={true} {...props} />
      </Group>
    </div>
  );
};

export default SwitchStack;
