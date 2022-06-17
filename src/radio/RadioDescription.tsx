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

export const useRadioDescription = createHook<RadioDescriptionOptions>(
  ({
    state,
    size,
    themeColor,
    isChecked,
    icon,
    label,
    description,
    stack,
    maxVisibleItems,
    disabled,
    ...props
  }) => {
    const theme = useTheme("radio");
    const className = cx(
      theme.description,
      size ? theme.size[size].description : "",
      themeColor
        ? !disabled
          ? cx(
              theme.themeColor[themeColor].default.description,
              theme.themeColor[themeColor].hover.description,
              theme.themeColor[themeColor].active.description,
              theme.themeColor[themeColor].focus.description,
            )
          : theme.themeColor[themeColor].disabled.description
        : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const RadioDescription = createComponent<RadioDescriptionOptions>(
  props => {
    const htmlProps = useRadioDescription(props);

    return createElement("div", htmlProps);
  },
);

export type RadioDescriptionOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<RadioUIProps> &
  Pick<RadioInputOptions, "disabled"> & {};

export type RadioDescriptionProps<T extends As = "div"> = Props<
  RadioDescriptionOptions<T>
>;
