import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, cx } from "../utils";

import { SwitchInputOptions } from "./SwitchInput";
import { SwitchUIProps } from "./SwitchProps";

export const useSwitchDescription = createHook<SwitchDescriptionOptions>(
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
      theme.description,
      size ? theme.size[size]?.description : "",
      themeColor
        ? !disabled
          ? cx(
              theme.themeColor[themeColor]?.default?.description,
              theme.themeColor[themeColor]?.hover?.description,
              theme.themeColor[themeColor]?.active?.description,
              theme.themeColor[themeColor]?.focus?.description,
            )
          : theme.themeColor[themeColor]?.disabled?.description
        : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const SwitchDescription = createComponent<SwitchDescriptionOptions>(
  props => {
    const htmlProps = useSwitchDescription(props);

    return createElement("div", htmlProps);
  },
  "SwitchDescription",
);

export type SwitchDescriptionOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<SwitchUIProps> &
  Pick<SwitchInputOptions, "disabled"> & {};

export type SwitchDescriptionProps<T extends As = "div"> = Props<
  SwitchDescriptionOptions<T>
>;
