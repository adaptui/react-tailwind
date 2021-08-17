import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { withIconA11y } from "../utils";
import { CheckboxProps } from "./Checkbox";
import { forwardRefWithAs } from "../utils/types";
import { CheckIcon, IndeterminateIcon } from "../icons";

export type CheckboxIconProps = BoxProps &
  Required<Pick<CheckboxProps, "state">> & {
    size: keyof Renderlesskit.GetThemeValue<"checkboxNew", "icon", "size">;
  };

export const CheckboxIcon = forwardRefWithAs<
  CheckboxIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { state, size, className, children, ...rest } = props;
  const isChecked = state === true;
  const isUnchecked = state === false;
  const isIndeterminate = state === "indeterminate";

  const checkbox = useTheme("checkboxNew");
  const baseStyles = cx(
    checkbox.icon.base,
    checkbox.icon.size[size],
    isUnchecked ? checkbox.icon.unChecked.default : "",
    isChecked ? checkbox.icon.checked.default : "",
    isIndeterminate ? checkbox.icon.checked.default : "",
    className,
  );

  return (
    <Box ref={ref} as="span" className={baseStyles} {...rest}>
      {isChecked ? withIconA11y(<CheckIcon />) : null}
      {isIndeterminate ? withIconA11y(<IndeterminateIcon />) : null}
    </Box>
  );
});

CheckboxIcon.displayName = "CheckboxIcon";
