import * as React from "react";
import { Group } from "reakit";

import { Radio, RadioProps } from "../../index";

export type RadioStackProps = RadioProps & {};

export const RadioStack: React.FC<RadioStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <Group
        className="flex flex-row space-x-4 w-fit"
        aria-label="Radio small example"
      >
        <Radio size="sm" value="apple" {...props} />
        <Radio size="sm" state={"apple"} value="apple" {...props} />
      </Group>
      <Group
        className="flex flex-row space-x-4 w-fit"
        aria-label="Radio medium example"
      >
        <Radio size="md" value="apple" {...props} />
        <Radio size="md" state={"apple"} value="apple" {...props} />
      </Group>
      <Group
        className="flex flex-row space-x-4 w-fit"
        aria-label="Radio large example"
      >
        <Radio size="lg" value="apple" {...props} />
        <Radio size="lg" state={"apple"} value="apple" {...props} />
      </Group>
    </div>
  );
};

export default RadioStack;
