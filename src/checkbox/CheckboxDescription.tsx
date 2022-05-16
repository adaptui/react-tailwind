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

export const useCheckboxDescription = createHook<CheckboxDescriptionOptions>(
  ({ state, size = "md", ...props }) => {
    if (!state) return props;

    const theme = useTheme("checkbox");
    const className = cx(
      theme.description.common,
      theme.description.size[size],
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const CheckboxDescription = createComponent<CheckboxDescriptionOptions>(
  props => {
    const htmlProps = useCheckboxDescription(props);

    return createElement("div", htmlProps);
  },
);

export type CheckboxDescriptionOptions<T extends As = "div"> = BoxOptions<T> &
  Pick<CheckboxBasicProps, "size"> & {
    /**
     * Object returned by the `useCheckboxState` hook. If not provided, the
     * internal state will be used.
     */
    state: CheckboxState;
  };

export type CheckboxDescriptionProps<T extends As = "div"> = Props<
  CheckboxDescriptionOptions<T>
>;
