import React from "react";
import { SeparatorOptions, useSeparator } from "ariakit";
import { useWrapElement } from "ariakit-utils";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useTheme } from "../theme";
import { cx, RenderPropType, runIfFn } from "../utils";

export const useDivider = createHook<DividerOptions>(({ label, ...props }) => {
  const theme = useTheme("divider");
  const className = cx(
    theme.base,
    props.orientation === "horizontal" ? theme.horizontal : theme.vertical,
    props.className,
  );
  const labelClassName = theme.label;

  props = useWrapElement(
    props,
    element => {
      if (label) {
        return (
          <div className="relative h-full w-full">
            {element}
            <span className={labelClassName}>
              {runIfFn(label, { orientation: props.orientation })}
            </span>
          </div>
        );
      }

      return element;
    },
    [label, labelClassName, props.orientation],
  );

  props = { ...props, className };
  props = useSeparator(props);

  return props;
});

export const Divider = createComponent<DividerOptions>(props => {
  const htmlProps = useDivider(props);

  return createElement("hr", htmlProps);
});

export type DividerOptions<T extends As = "hr"> = SeparatorOptions<T> & {
  /**
   * Provide a label to name the divider at the center to mark it as a section.
   */
  label?: RenderPropType;
};

export type DividerProps<T extends As = "hr"> = Props<DividerOptions<T>>;
