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
import { cx, RenderProp, runIfFn } from "../utils";

export const useDivider = createHook<DividerOptions>(
  ({ label, orientation = "horizontal", ...props }) => {
    const theme = useTheme("divider");
    const className = cx(
      theme.base,
      orientation === "horizontal" ? theme.horizontal : theme.vertical,
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
                {runIfFn(label as React.ReactNode, { orientation })}
              </span>
            </div>
          );
        }

        return element;
      },
      [label, labelClassName, orientation],
    );

    props = { ...props, className };
    props = useSeparator({ ...props, orientation });

    return props;
  },
);

export const Divider = createComponent<DividerOptions>(props => {
  const htmlProps = useDivider(props);

  return createElement("hr", htmlProps);
});

export type DividerOptions<T extends As = "hr"> = SeparatorOptions<T> & {
  /**
   * Provide a label to name the divider at the center to mark it as a section.
   */
  label?: RenderProp<SeparatorOptions>;
};

export type DividerProps<T extends As = "hr"> = Props<DividerOptions<T>>;
