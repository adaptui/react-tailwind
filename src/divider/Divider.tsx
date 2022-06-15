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
import { cx, RenderProp, runRenderFn } from "../utils";

export const useDivider = createHook<DividerOptions>(
  ({
    orientation = "horizontal",
    label,
    labelPosition = "center",
    ...props
  }) => {
    const theme = useTheme("divider");
    const className = cx(
      theme.base,
      theme.orientation[orientation],
      props.className,
    );

    props = useWrapElement(
      props,
      element => {
        if (label) {
          const labelClassName = cx(theme.label[orientation]?.[labelPosition]);

          return (
            <div className="relative h-full w-full">
              {element}
              <span className={labelClassName}>
                {runRenderFn(label, { orientation, label, labelPosition })}
              </span>
            </div>
          );
        }

        return element;
      },
      [label, orientation, labelPosition],
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

export type DividerState = {
  orientation: SeparatorOptions["orientation"];
  /**
   * Provide a label to name the divider at the center to mark it as a section.
   */
  label?: RenderProp<DividerState>;

  /**
   * Position of the given label.
   */
  labelPosition?: "start" | "center" | "end";
};

export type DividerOptions<T extends As = "hr"> = SeparatorOptions<T> &
  Partial<DividerState>;

export type DividerProps<T extends As = "hr"> = Props<DividerOptions<T>>;
