import * as React from "react";

import { Input, InputProps } from "../../index";

export type InputStackProps = InputProps & {};

export const InputStack: React.FC<InputStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Input {...props} size="sm" variant="outline">
          Continue
        </Input>
        <Input {...props} size="md" variant="outline">
          Continue
        </Input>
        <Input {...props} size="lg" variant="outline">
          Continue
        </Input>
        <Input {...props} size="xl" variant="outline">
          Continue
        </Input>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Input {...props} size="sm" variant="subtle">
          Continue
        </Input>
        <Input {...props} size="md" variant="subtle">
          Continue
        </Input>
        <Input {...props} size="lg" variant="subtle">
          Continue
        </Input>
        <Input {...props} size="xl" variant="subtle">
          Continue
        </Input>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Input {...props} size="sm" variant="underline">
          Continue
        </Input>
        <Input {...props} size="md" variant="underline">
          Continue
        </Input>
        <Input {...props} size="lg" variant="underline">
          Continue
        </Input>
        <Input {...props} size="xl" variant="underline">
          Continue
        </Input>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Input {...props} size="sm" variant="ghost">
          Continue
        </Input>
        <Input {...props} size="md" variant="ghost">
          Continue
        </Input>
        <Input {...props} size="lg" variant="ghost">
          Continue
        </Input>
        <Input {...props} size="xl" variant="ghost">
          Continues
        </Input>
      </div>
    </div>
  );
};

export default InputStack;
