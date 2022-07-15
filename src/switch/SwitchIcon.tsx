import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { SwitchInputOptions } from "./SwitchInput";
import { SwitchUIProps } from "./SwitchProps";

export const useSwitchIcon = createHook<SwitchIconOptions>(
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
      theme.icon?.base,
      size ? theme.size[size]?.icon?.base : "",
      themeColor
        ? isChecked === true
          ? !disabled
            ? cx(
                theme.themeColor[themeColor]?.default?.icon?.base?.checked,
                theme.themeColor[themeColor]?.hover?.icon?.base?.checked,
                theme.themeColor[themeColor]?.active?.icon?.base?.checked,
                theme.themeColor[themeColor]?.focus?.icon?.base?.checked,
              )
            : theme.themeColor[themeColor]?.disabled?.icon?.base?.checked
          : !disabled
          ? cx(
              theme.themeColor[themeColor]?.default?.icon?.base?.unChecked,
              theme.themeColor[themeColor]?.hover?.icon?.base?.unChecked,
              theme.themeColor[themeColor]?.active?.icon?.base?.unChecked,
              theme.themeColor[themeColor]?.focus?.icon?.base?.unChecked,
            )
          : theme.themeColor[themeColor]?.disabled?.icon?.base?.unChecked
        : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const SwitchIcon = createComponent<SwitchIconOptions>(props => {
  const htmlProps = useSwitchIcon(props);

  return createElement("span", htmlProps);
}, "SwitchIcon");

export type SwitchIconOptions<T extends As = "span"> = BoxOptions<T> &
  Partial<SwitchUIProps> &
  Pick<SwitchInputOptions, "disabled"> & {};

export type SwitchIconProps<T extends As = "span"> = Props<
  SwitchIconOptions<T>
>;
