import { createComponent, createHook } from "reakit-system";
import { RadioGroupHTMLProps, RadioGroupOptions, useRadioGroup } from "reakit";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { RADIO_GROUP_WRAPPER_KEYS } from "./__keys";
import { RadioGroupState } from "./RadioGroupState";

export type RadioGroupWrapperOptions = BoxOptions &
  RadioGroupOptions &
  Pick<RadioGroupState, "stack" | "size">;

export type RadioGroupWrapperHTMLProps = BoxHTMLProps & RadioGroupHTMLProps;

export type RadioGroupWrapperProps = RadioGroupWrapperOptions &
  RadioGroupWrapperHTMLProps;

export const useRadioGroupWrapper = createHook<
  RadioGroupWrapperOptions,
  RadioGroupWrapperHTMLProps
>({
  name: "RadioGroupWrapper",
  compose: [useBox, useRadioGroup],
  keys: RADIO_GROUP_WRAPPER_KEYS,

  useProps(options, htmlProps) {
    const { stack, size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("radio");
    const className = cx(
      theme.group[stack].base,
      theme.group[stack].size[size],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const RadioGroupWrapper = createComponent({
  as: "div",
  memo: true,
  useHook: useRadioGroupWrapper,
});
