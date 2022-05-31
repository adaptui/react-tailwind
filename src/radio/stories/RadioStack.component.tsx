import * as React from "react";
import { Group } from "ariakit";

import { Radio, RadioProps } from "../../index";

export type RadioStackProps = RadioProps & {};

export const RadioStack: React.FC<RadioStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <Group
        className="flex w-fit flex-row space-x-4"
        aria-label="Radio small example"
      >
        <Radio size="sm" inputValue="apple" {...props} />
        <Radio size="sm" defaultValue={"apple"} inputValue="apple" {...props} />
      </Group>
      <Group
        className="flex w-fit flex-row space-x-4"
        aria-label="Radio medium example"
      >
        <Radio size="md" inputValue="apple" {...props} />
        <Radio size="md" defaultValue={"apple"} inputValue="apple" {...props} />
      </Group>
      <Group
        className="flex w-fit flex-row space-x-4"
        aria-label="Radio large example"
      >
        <Radio size="lg" inputValue="apple" {...props} />
        <Radio size="lg" defaultValue={"apple"} inputValue="apple" {...props} />
      </Group>
    </div>
  );
};

export default RadioStack;
