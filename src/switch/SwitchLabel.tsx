import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SwitchInputOptions } from "./SwitchInput";
import { SwitchUIProps } from "./SwitchProps";

export const useSwitchLabel = createHook<SwitchLabelOptions>(
  ({
    state,
    size,
    themeColor,
    isChecked,
    icon,
    label,
    description,
    disabled,
    ...props
  }) => {
    const theme = useTheme("switch");
    const className = cx(
      theme.label.base,
      disabled ? theme.label.disabled : "",
      label && !description && size ? theme.size[size]?.label : "",
      label && !description && themeColor
        ? !disabled
          ? cx(
              theme.themeColor[themeColor]?.default?.label,
              theme.themeColor[themeColor]?.hover?.label,
              theme.themeColor[themeColor]?.active?.label,
              theme.themeColor[themeColor]?.focus?.label,
            )
          : theme.themeColor[themeColor]?.disabled?.label
        : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const SwitchLabel = createComponent<SwitchLabelOptions>(props => {
  const htmlProps = useSwitchLabel(props);

  return createElement("label", htmlProps);
});

export type SwitchLabelOptions<T extends As = "label"> = BoxOptions<T> &
  Pick<SwitchInputOptions, "disabled"> &
  Partial<SwitchUIProps> & {};

export type SwitchLabelProps<T extends As = "label"> = Props<
  SwitchLabelOptions<T>
>;
