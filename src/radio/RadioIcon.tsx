import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { RadioInputOptions } from "./RadioInput";
import { RadioUIProps } from "./RadioProps";

export const useRadioIcon = createHook<RadioIconOptions>(
  ({
    state,
    size,
    themeColor,
    isChecked,
    icon,
    label,
    description,
    stack,
    maxVisibleItems,
    disabled,
    ...props
  }) => {
    const theme = useTheme("radio");
    const className = cx(
      theme.icon,
      size ? theme.size[size].icon : "",
      themeColor
        ? isChecked === true
          ? !disabled
            ? cx(
                theme.themeColor[themeColor].default.icon.checked,
                theme.themeColor[themeColor].hover.icon.checked,
                theme.themeColor[themeColor].active.icon.checked,
                theme.themeColor[themeColor].focus.icon.checked,
              )
            : theme.themeColor[themeColor].disabled.icon.checked
          : !disabled
          ? cx(
              theme.themeColor[themeColor].default.icon.unChecked,
              theme.themeColor[themeColor].hover.icon.unChecked,
              theme.themeColor[themeColor].active.icon.unChecked,
              theme.themeColor[themeColor].focus.icon.unChecked,
            )
          : theme.themeColor[themeColor].disabled.icon.unChecked
        : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const RadioIcon = createComponent<RadioIconOptions>(props => {
  const htmlProps = useRadioIcon(props);

  return createElement("span", htmlProps);
});

export type RadioIconOptions<T extends As = "span"> = BoxOptions<T> &
  Partial<RadioUIProps> &
  Pick<RadioInputOptions, "disabled"> & {};

export type RadioIconProps<T extends As = "span"> = Props<RadioIconOptions<T>>;
