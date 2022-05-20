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

export const useSwitchIcon = createHook<SwitchIconOptions>(
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
      theme.icon.common,
      size ? theme.icon.size[size] : "",
      description ? theme.icon.description : "",
      isChecked
        ? cx(
            theme.icon.checked.default,
            theme.icon.checked.hover,
            theme.icon.checked.active,
            theme.icon.checked.focus,
            theme.icon.checked.disabled,
          )
        : cx(
            theme.icon.unChecked.default,
            theme.icon.unChecked.hover,
            theme.icon.unChecked.active,
            theme.icon.unChecked.focus,
            theme.icon.unChecked.disabled,
          ),
      props.className,
    );

    props = { role: "img", "aria-hidden": true, ...props, className };
    props = useBox(props);

    return props;
  },
);

export const SwitchIcon = createComponent<SwitchIconOptions>(props => {
  const htmlProps = useSwitchIcon(props);

  return createElement("span", htmlProps);
});

export type SwitchIconOptions<T extends As = "span"> = BoxOptions<T> &
  Partial<SwitchUIProps> & {};

export type SwitchIconProps<T extends As = "span"> = Props<
  SwitchIconOptions<T>
>;
