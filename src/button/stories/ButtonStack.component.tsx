import * as React from "react";

import { Button, ButtonProps } from "../../index";

export type ButtonStackProps = ButtonProps & {};

export const ButtonStack: React.FC<ButtonStackProps> = props => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="space-x-2">
        <Button {...props} size="sm" variant="solid">
          Continue
        </Button>
        <Button {...props} size="md" variant="solid">
          Continue
        </Button>
        <Button {...props} size="lg" variant="solid">
          Continue
        </Button>
        <Button {...props} size="xl" variant="solid">
          Continue
        </Button>
      </div>
      <div className="space-x-2">
        <Button {...props} size="sm" variant="subtle">
          Continue
        </Button>
        <Button {...props} size="md" variant="subtle">
          Continue
        </Button>
        <Button {...props} size="lg" variant="subtle">
          Continue
        </Button>
        <Button {...props} size="xl" variant="subtle">
          Continue
        </Button>
      </div>
      <div className="space-x-2">
        <Button {...props} size="sm" variant="outline">
          Continue
        </Button>
        <Button {...props} size="md" variant="outline">
          Continue
        </Button>
        <Button {...props} size="lg" variant="outline">
          Continue
        </Button>
        <Button {...props} size="xl" variant="outline">
          Continue
        </Button>
      </div>
      <div className="space-x-2">
        <Button {...props} size="sm" variant="ghost">
          Continue
        </Button>
        <Button {...props} size="md" variant="ghost">
          Continue
        </Button>
        <Button {...props} size="lg" variant="ghost">
          Continue
        </Button>
        <Button {...props} size="xl" variant="ghost">
          Continues
        </Button>
      </div>
    </div>
  );
};

export default ButtonStack;
