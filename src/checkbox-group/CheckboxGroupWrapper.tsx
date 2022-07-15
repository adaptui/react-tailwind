import { GroupOptions, useGroup } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { tcm } from "../utils";

import { CheckboxGroupUIProps } from "./CheckboxGroupProps";

export const useCheckboxGroupWrapper = createHook<CheckboxGroupWrapperOptions>(
  ({ state, size, themeColor, stack, maxVisibleItems, prefix, ...props }) => {
    const theme = useTheme("checkboxGroup");
    const className = tcm(
      stack ? theme[stack] : "",
      stack && size ? theme.size[size]?.[stack] : "",
      props.className,
    );

    props = { ...props, className };
    props = useGroup(props);
    props = useBox(props);

    return props;
  },
);

export const CheckboxGroupWrapper =
  createComponent<CheckboxGroupWrapperOptions>(props => {
    const htmlProps = useCheckboxGroupWrapper(props);

    return createElement("div", htmlProps);
  });

export type CheckboxGroupWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  GroupOptions<T> &
  Partial<CheckboxGroupUIProps> & {};

export type CheckboxGroupWrapperProps<T extends As = "div"> = Props<
  CheckboxGroupWrapperOptions<T>
>;
