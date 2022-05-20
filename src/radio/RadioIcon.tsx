import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { RadioUIProps } from "./RadioProps";

export const useRadioIcon = createHook<RadioIconOptions>(
  ({
    state,
    isChecked,
    size,
    icon,
    label,
    description,
    stack,
    maxVisibleItems,
    ...props
  }) => {
    const theme = useTheme("radio");
    const className = cx(
      theme.icon.common,
      description ? theme.icon.description : "",
      size ? theme.icon.size[size] : "",
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
  Partial<RadioUIProps> & {};

export type RadioIconProps<T extends As = "span"> = Props<RadioIconOptions<T>>;
