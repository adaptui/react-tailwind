import { cx } from "@renderlesskit/react";

import { Box, BoxProps } from "../box";
import { CheckIcon, IndeterminateIcon } from "../icons";
import { useTheme } from "../theme";
import { withIconA11y } from "../utils";
import { forwardRefWithAs } from "../utils/types";
import { CheckboxProps } from "./Checkbox";

export type CheckboxIconProps = BoxProps &
  Required<Pick<CheckboxProps, "state">> & {
    size: keyof Renderlesskit.GetThemeValue<"checkboxNew", "icon", "size">;
  };

export const CheckboxIcon = forwardRefWithAs<
  CheckboxIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { state, size } = props;
  const isChecked = state === true;
  const isUnchecked = state === false;
  const isIndeterminate = state === "indeterminate";

  const checkbox = useTheme("checkboxNew");
  const baseStyles = cx(
    checkbox.icon.base,
    checkbox.icon.size[size],
    isUnchecked ? checkbox.icon.state.unChecked : "",
    isChecked ? checkbox.icon.state.checked : "",
    isIndeterminate ? checkbox.icon.state.checked : "",
  );

  return (
    <Box ref={ref} as="span" className={baseStyles}>
      {isChecked ? withIconA11y(<CheckIcon />) : null}
      {isIndeterminate ? withIconA11y(<IndeterminateIcon />) : null}
    </Box>
  );
});

CheckboxIcon.displayName = "CheckboxIcon";
