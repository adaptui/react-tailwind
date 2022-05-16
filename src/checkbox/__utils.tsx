import { CheckIcon, DashIcon } from "../icons";
import { withIconA11y } from "../utils";

import { CheckboxUiProps } from "./stories/CheckboxBasic.component";

export const CheckboxDefaultIcon = (props: CheckboxUiProps) => {
  const { isChecked, isIndeterminate } = props;

  return (
    <>
      {isChecked ? withIconA11y(<CheckIcon />) : null}
      {isIndeterminate ? withIconA11y(<DashIcon />) : null}
    </>
  );
};
