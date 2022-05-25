import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SwitchUIProps } from "./SwitchProps";

export const useSwitchText = createHook<SwitchTextOptions>(
  ({
    state,
    size,
    isChecked,
    icon,
    label,
    description,
    disabled,
    ...props
  }) => {
    const theme = useTheme("switch");
    const className = cx(
      theme.text.common,
      size ? theme.text.size[size] : "",
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
  Partial<SwitchUIProps> & {};

export type SwitchTextProps<T extends As = "div"> = Props<SwitchTextOptions<T>>;
