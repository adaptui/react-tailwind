import { createComponent, createHook, useCreateElement } from "reakit-system";
import { GroupHTMLProps, GroupOptions, useGroup } from "reakit";
import { useWarning } from "reakit-warning";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CHECKBOX_GROUP_WRAPPER_KEYS } from "./__keys";
import { CheckboxGroupState } from "./CheckboxGroupState";

export type CheckboxGroupWrapperOptions = BoxOptions &
  GroupOptions &
  Pick<CheckboxGroupState, "stack" | "size">;

export type CheckboxGroupWrapperHTMLProps = BoxHTMLProps & GroupHTMLProps;

export type CheckboxGroupWrapperProps = CheckboxGroupWrapperOptions &
  CheckboxGroupWrapperHTMLProps;

export const useCheckboxGroupContextWrapper = createHook<
  CheckboxGroupWrapperOptions,
  CheckboxGroupWrapperHTMLProps
>({
  name: "CheckboxGroupWrapper",
  compose: [useBox, useGroup],
  keys: CHECKBOX_GROUP_WRAPPER_KEYS,

  useProps(options, htmlProps) {
    const { stack, size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("checkbox");
    const className = cx(
      theme.group[stack].common,
      theme.group[stack].size[size],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const CheckboxGroupWrapper = createComponent({
  as: "div",
  memo: true,
  useHook: useCheckboxGroupContextWrapper,
  useCreateElement: (type, props, children) => {
    useWarning(
      !props["aria-label"] && !props["aria-labelledby"],
      "You should provide either `aria-label` or `aria-labelledby` props.",
    );
    return useCreateElement(type, props, children);
  },
});
