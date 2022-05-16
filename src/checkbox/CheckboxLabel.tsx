import { CheckboxState } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CheckboxBasicProps } from "./stories/CheckboxBasic.component";
import { CheckboxInputOptions } from "./CheckboxInput";

export const useCheckboxLabel = createHook<CheckboxLabelOptions>(
  ({ state, label, description, size = "md", disabled, ...props }) => {
    const theme = useTheme("checkbox");
    const className = cx(
      theme.label.common,
      label && !description ? theme.label.size[size] : "",
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

export const CheckboxLabel = createComponent<CheckboxLabelOptions>(props => {
  const htmlProps = useCheckboxLabel(props);

  return createElement("label", htmlProps);
});

export type CheckboxLabelOptions<T extends As = "label"> = BoxOptions<T> &
  Pick<CheckboxInputOptions, "disabled"> &
  Pick<CheckboxBasicProps, "size" | "label" | "description"> & {
    /**
     * Object returned by the `useCheckboxState` hook. If not provided, the
     * internal state will be used.
     */
    state: CheckboxState;
  };

export type CheckboxLabelProps<T extends As = "label"> = Props<
  CheckboxLabelOptions<T>
>;
