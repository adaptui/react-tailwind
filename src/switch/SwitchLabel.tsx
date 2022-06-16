import { cx } from "ariakit-utils";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { SwitchUIProps } from "./SwitchProps";

export const useSwitchLabel = createHook<SwitchLabelOptions>(
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
      theme.label.common,
      size && label && !description ? theme.label.size[size] : "",
      label && !description ? (disabled ? "" : theme.label.only) : "",
      disabled ? theme.label.disabled : "",
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
  Partial<SwitchUIProps> & {};

export type SwitchLabelProps<T extends As = "label"> = Props<
  SwitchLabelOptions<T>
>;
