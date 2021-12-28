import * as React from "react";

import { Button, SlotIcon } from "../../index";

export type ButtonLoadingA11yProps = {};

export const ButtonLoadingA11y: React.FC<ButtonLoadingA11yProps> = props => {
  const [state, setState] = React.useState(false);

  React.useEffect(() => {
    let timeout: number;
    if (state) {
      timeout = window.setTimeout(() => setState(prev => !prev), 3000);
    }

    return () => window.clearTimeout(timeout);
  }, [state]);

  return (
    <div className="space-x-2">
      <Button size="md" variant="solid">
        Previous Button
      </Button>
      <Button
        size="md"
        variant="solid"
        loading={state}
        prefix={<SlotIcon />}
        suffix={<SlotIcon />}
        onClick={() => setState(!state)}
      >
        Send Email
      </Button>
      <Button size="md" variant="solid">
        Next Button
      </Button>
    </div>
  );
};

export default ButtonLoadingA11y;
