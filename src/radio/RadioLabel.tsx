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

export const useRadioLabel = createHook<RadioLabelOptions>(
  ({
    state,
    isChecked,
    size,
    icon,
    label,
    description,
    disabled,
    stack,
    maxVisibleItems,
    ...props
  }) => {
    const theme = useTheme("radio");
    const className = cx(
      theme.label.common,
      size && label && !description ? theme.label.size[size] : "",
      label && !description ? (disabled ? "" : theme.label.only) : "",
      disabled ? theme.label.disabled : "",
      // maxVisibleItems != null ? theme.label.showMore[stack] : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const RadioLabel = createComponent<RadioLabelOptions>(props => {
  const htmlProps = useRadioLabel(props);

  return createElement("label", htmlProps);
});

export type RadioLabelOptions<T extends As = "label"> = BoxOptions<T> &
  Partial<RadioUIProps> &
  Pick<RadioInputOptions, "disabled"> & {};

export type RadioLabelProps<T extends As = "label"> = Props<
  RadioLabelOptions<T>
>;
