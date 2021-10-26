import * as React from "react";
import { createComponent, createHook, useCreateElement } from "reakit-system";
import { GroupHTMLProps, GroupOptions, useGroup } from "reakit";
import { useWarning } from "reakit-warning";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { RENDERLESSKIT_CHECKBOX_GROUP_KEYS } from "./__keys";
import { CheckboxGroupState } from "./CheckboxGroupState";

export type RenderlesskitCheckboxGroupOptions = BoxOptions &
  GroupOptions &
  Pick<CheckboxGroupState, "stack" | "size">;

export type RenderlesskitCheckboxGroupHTMLProps = BoxHTMLProps &
  GroupHTMLProps &
  React.FieldsetHTMLAttributes<any>;

export type RenderlesskitCheckboxGroupProps =
  RenderlesskitCheckboxGroupOptions & RenderlesskitCheckboxGroupHTMLProps;

export const useRenderlesskitCheckboxGroup = createHook<
  RenderlesskitCheckboxGroupOptions,
  RenderlesskitCheckboxGroupHTMLProps
>({
  name: "RenderlesskitCheckboxGroup",
  compose: [useBox, useGroup],
  keys: RENDERLESSKIT_CHECKBOX_GROUP_KEYS,

  useProps(options, htmlProps) {
    const { stack, size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("checkbox");
    const className = cx(
      theme.group[stack].base,
      theme.group[stack].size[size],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const RenderlesskitCheckboxGroup = createComponent({
  as: "div",
  useHook: useRenderlesskitCheckboxGroup,
  useCreateElement: (type, props, children) => {
    useWarning(
      !props["aria-label"] && !props["aria-labelledby"],
      "You should provide either `aria-label` or `aria-labelledby` props.",
    );
    return useCreateElement(type, props, children);
  },
});
