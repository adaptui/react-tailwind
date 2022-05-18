import { GroupOptions, useGroup } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useTheme } from "../theme";
import { cx } from "../utils";

import { CheckboxGroupUIProps } from "./CheckboxGroupProps";

export const useCheckboxGroupWrapper = createHook<CheckboxGroupWrapperOptions>(
  ({ state, size, stack, maxVisibleItems, prefix, ...props }) => {
    const theme = useTheme("checkbox");
    const className = cx(
      stack ? theme.group[stack].common : "",
      stack && size ? theme.group[stack].size[size] : "",
      props.className,
    );

    props = { ...props, className };
    props = useGroup(props);

    return props;
  },
);

export const CheckboxGroupWrapper =
  createComponent<CheckboxGroupWrapperOptions>(props => {
    const htmlProps = useCheckboxGroupWrapper(props);

    return createElement("div", htmlProps);
  });

export type CheckboxGroupWrapperOptions<T extends As = "div"> =
  GroupOptions<T> & Partial<CheckboxGroupUIProps> & {};

export type CheckboxGroupWrapperProps<T extends As = "div"> = Props<
  CheckboxGroupWrapperOptions<T>
>;
