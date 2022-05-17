import { CheckIcon, DashIcon } from "../icons";
import { withIconA11y } from "../utils";

import { CheckboxUIProps } from "./CheckboxProps";

export const CheckboxDefaultIcon = (props: CheckboxUIProps) => {
  const { isChecked, isIndeterminate } = props;

  return (
    <>
      {isChecked ? withIconA11y(<CheckIcon />) : null}
      {isIndeterminate ? withIconA11y(<DashIcon />) : null}
    </>
  );
};
