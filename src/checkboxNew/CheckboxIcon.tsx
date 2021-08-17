import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { CheckboxProps } from "./Checkbox";
import { runIfFn, withIconA11y } from "../utils";
import { forwardRefWithAs } from "../utils/types";
import { CheckIcon, IndeterminateIcon } from "../icons";

export type CheckboxIconRenderProps = Pick<CheckboxProps, "state" | "invalid">;

export type CheckboxIconProps = BoxProps &
  Required<Pick<CheckboxProps, "state" | "invalid">> & {
    size: keyof Renderlesskit.GetThemeValue<"checkboxNew", "icon", "size">;
  };

export const CheckboxIcon = forwardRefWithAs<
  CheckboxIconProps,
  HTMLSpanElement,
  "span"
>((props, ref) => {
  const { state, size, invalid, className, children, ...rest } = props;
  const isChecked = state === true;
  const isUnchecked = state === false;
  const isIndeterminate = state === "indeterminate";

  const checkbox = useTheme("checkboxNew");
  const baseStyles = cx(
    checkbox.icon.base,
    checkbox.icon.size[size],
    isUnchecked
      ? invalid
        ? checkbox.icon.unChecked.invalid
        : cx(
            checkbox.icon.unChecked.default,
            checkbox.icon.unChecked.hover,
            checkbox.icon.unChecked.active,
            checkbox.icon.unChecked.focus,
            checkbox.icon.unChecked.disabled,
          )
      : "",
    isChecked
      ? invalid
        ? checkbox.icon.checked.invalid
        : cx(
            checkbox.icon.checked.default,
            checkbox.icon.checked.hover,
            checkbox.icon.checked.active,
            checkbox.icon.checked.focus,
            checkbox.icon.checked.disabled,
          )
      : "",
    isIndeterminate
      ? invalid
        ? checkbox.icon.indeterminate.invalid
        : cx(
            checkbox.icon.checked.default,
            checkbox.icon.indeterminate.hover,
            checkbox.icon.indeterminate.active,
            checkbox.icon.indeterminate.focus,
            checkbox.icon.indeterminate.disabled,
          )
      : "",
    className,
  );

  return (
    <Box ref={ref} as="span" className={baseStyles} {...rest}>
      {children ? runIfFn(children, { state, invalid }) : null}
    </Box>
  );
});

CheckboxIcon.displayName = "CheckboxIcon";

export const CheckboxDefaultIcon = (props: CheckboxIconRenderProps) => {
  const { state } = props;
  const isChecked = state === true;
  const isIndeterminate = state === "indeterminate";

  return (
    <>
      {isChecked ? withIconA11y(<CheckIcon />) : null}
      {isIndeterminate ? withIconA11y(<IndeterminateIcon />) : null}
    </>
  );
};
