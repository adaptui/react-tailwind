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

export const useSwitchDescription = createHook<SwitchDescriptionOptions>(
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
      theme.description.common,
      size ? theme.description.size[size] : "",
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
);

export type SwitchDescriptionOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<SwitchUIProps> & {};

export type SwitchDescriptionProps<T extends As = "div"> = Props<
  SwitchDescriptionOptions<T>
>;
