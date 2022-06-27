import { CheckIcon, DashIcon } from "../icons";
import { withIconA11y } from "../utils";

import { CheckboxUIProps } from "./CheckboxProps";

export const CheckboxDefaultIcon: CheckboxUIProps["icon"] = props => {
  const { isChecked, isIndeterminate } = props;

  return (
    <>
      {isChecked ? withIconA11y(<CheckIcon />, {}, {}) : null}
      {isIndeterminate ? withIconA11y(<DashIcon />, {}, {}) : null}
    </>
  );
};
