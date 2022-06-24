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

export const useSwitchText = createHook<SwitchTextOptions>(
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
      theme.text,
      size ? theme.size[size]?.text : "",
      themeColor
        ? !disabled
          ? cx(
              theme.themeColor[themeColor]?.default?.text,
              theme.themeColor[themeColor]?.hover?.text,
              theme.themeColor[themeColor]?.active?.text,
              theme.themeColor[themeColor]?.focus?.text,
            )
          : theme.themeColor[themeColor]?.disabled?.text
        : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const SwitchText = createComponent<SwitchTextOptions>(props => {
  const htmlProps = useSwitchText(props);

  return createElement("div", htmlProps);
});

export type SwitchTextOptions<T extends As = "div"> = BoxOptions<T> &
  Pick<SwitchInputOptions, "disabled"> &
  Partial<SwitchUIProps> & {};

export type SwitchTextProps<T extends As = "div"> = Props<SwitchTextOptions<T>>;
