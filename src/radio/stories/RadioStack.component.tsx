import * as React from "react";
import { Group } from "ariakit";

import { Radio, RadioProps } from "../../index";

export type RadioStackProps = RadioProps & {};

export const RadioStack: React.FC<RadioStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4">
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Radio small example"
        >
          <Radio size="sm" themeColor="base" inputValue="apple" {...props} />
          <Radio
            size="sm"
            themeColor="base"
            defaultValue={"apple"}
            inputValue="apple"
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Radio medium example"
        >
          <Radio size="md" themeColor="base" inputValue="apple" {...props} />
          <Radio
            size="md"
            themeColor="base"
            defaultValue={"apple"}
            inputValue="apple"
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Radio large example"
        >
          <Radio size="lg" themeColor="base" inputValue="apple" {...props} />
          <Radio
            size="lg"
            themeColor="base"
            defaultValue={"apple"}
            inputValue="apple"
            {...props}
          />
        </Group>
      </div>
      <div className="flex flex-col space-y-4">
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Radio small example"
        >
          <Radio size="sm" themeColor="primary" inputValue="apple" {...props} />
          <Radio
            size="sm"
            themeColor="primary"
            defaultValue={"apple"}
            inputValue="apple"
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Radio medium example"
        >
          <Radio size="md" themeColor="primary" inputValue="apple" {...props} />
          <Radio
            size="md"
            themeColor="primary"
            defaultValue={"apple"}
            inputValue="apple"
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Radio large example"
        >
          <Radio size="lg" themeColor="primary" inputValue="apple" {...props} />
          <Radio
            size="lg"
            themeColor="primary"
            defaultValue={"apple"}
            inputValue="apple"
            {...props}
          />
        </Group>
      </div>
      <div className="flex flex-col space-y-4">
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Radio small example"
        >
          <Radio size="sm" themeColor="danger" inputValue="apple" {...props} />
          <Radio
            size="sm"
            themeColor="danger"
            defaultValue={"apple"}
            inputValue="apple"
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Radio medium example"
        >
          <Radio size="md" themeColor="danger" inputValue="apple" {...props} />
          <Radio
            size="md"
            themeColor="danger"
            defaultValue={"apple"}
            inputValue="apple"
            {...props}
          />
        </Group>
        <Group
          className="flex w-fit flex-row space-x-4"
          aria-label="Radio large example"
        >
          <Radio size="lg" themeColor="danger" inputValue="apple" {...props} />
          <Radio
            size="lg"
            themeColor="danger"
            defaultValue={"apple"}
            inputValue="apple"
            {...props}
          />
        </Group>
      </div>
    </div>
  );
};

export default RadioStack;
