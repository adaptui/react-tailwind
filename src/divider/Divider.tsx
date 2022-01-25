import React from "react";
import { createHook } from "reakit-system";
import { SeparatorHTMLProps, SeparatorOptions, useSeparator } from "reakit";
import { createComponent } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx, RenderPropType, runIfFn } from "../utils";

import { DIVIDER_KEYS } from "./__keys";

export type DividerOptions = BoxOptions &
  SeparatorOptions & {
    /**
     * Provide a label to name the divider at the center to mark it as a section.
     */
    label?: RenderPropType;
  };

export type DividerHTMLProps = BoxHTMLProps & SeparatorHTMLProps;

export type DividerProps = DividerOptions & DividerHTMLProps;

export const useDivider = createHook<DividerOptions, DividerHTMLProps>({
  name: "Divider",
  compose: [useBox, useSeparator],
  keys: DIVIDER_KEYS,

  useProps(options, htmlProps) {
    const { orientation, label } = options;
    const {
      className: htmlClassName,
      wrapElement: htmlWrapElement,
      ...restHtmlProps
    } = htmlProps;

    const divider = useTheme("divider");
    const className = cx(
      divider.base,
      orientation === "horizontal" ? divider.horizontal : divider.vertical,
      htmlClassName,
    );
    const labelClassName = divider.label;

    const wrapElement = React.useCallback(
      (element: React.ReactNode) => {
        if (label) {
          element = (
            <div className="relative w-full h-full">
              {element}
              <span className={labelClassName}>
                {runIfFn(label, { orientation })}
              </span>
            </div>
          );
        }

        if (htmlWrapElement) {
          element = htmlWrapElement(element);
        }

        return element;
      },
      [htmlWrapElement, label, labelClassName, orientation],
    );

    return { className, wrapElement, ...restHtmlProps };
  },
});

export const Divider = createComponent({
  as: "hr",
  memo: true,
  useHook: useDivider,
});
