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

export const useCheckboxText = createHook<CheckboxTextOptions>(
  ({ state, size = "md", ...props }) => {
    const theme = useTheme("checkbox");
    const className = cx(
      theme.text.common,
      theme.text.size[size],
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const CheckboxText = createComponent<CheckboxTextOptions>(props => {
  const htmlProps = useCheckboxText(props);

  return createElement("div", htmlProps);
});

export type CheckboxTextOptions<T extends As = "div"> = BoxOptions<T> &
  Pick<CheckboxBasicProps, "size"> & {
    /**
     * Object returned by the `useCheckboxState` hook. If not provided, the
     * internal state will be used.
     */
    state: CheckboxState;
  };

export type CheckboxTextProps<T extends As = "div"> = Props<
  CheckboxTextOptions<T>
>;
