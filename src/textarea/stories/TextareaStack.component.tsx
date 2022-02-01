import * as React from "react";

import { Textarea, TextareaProps } from "../../index";

export type TextareaStackProps = TextareaProps & {};

export const TextareaStack: React.FC<TextareaStackProps> = props => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Textarea {...props} size="sm" variant="outline">
          Continue
        </Textarea>
        <Textarea {...props} size="md" variant="outline">
          Continue
        </Textarea>
        <Textarea {...props} size="lg" variant="outline">
          Continue
        </Textarea>
        <Textarea {...props} size="xl" variant="outline">
          Continue
        </Textarea>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Textarea {...props} size="sm" variant="subtle">
          Continue
        </Textarea>
        <Textarea {...props} size="md" variant="subtle">
          Continue
        </Textarea>
        <Textarea {...props} size="lg" variant="subtle">
          Continue
        </Textarea>
        <Textarea {...props} size="xl" variant="subtle">
          Continue
        </Textarea>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Textarea {...props} size="sm" variant="underline">
          Continue
        </Textarea>
        <Textarea {...props} size="md" variant="underline">
          Continue
        </Textarea>
        <Textarea {...props} size="lg" variant="underline">
          Continue
        </Textarea>
        <Textarea {...props} size="xl" variant="underline">
          Continue
        </Textarea>
      </div>
    </div>
  );
};

export default TextareaStack;
