import { createComponent, createHook } from "reakit-system";
import { RadioGroupHTMLProps, RadioGroupOptions, useRadioGroup } from "reakit";
import { cx } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { RENDERLESSKIT_RADIO_GROUP_KEYS } from "./__keys";
import { RadioGroupState } from "./RadioGroupState";

export type RenderlesskitRadioGroupOptions = BoxOptions &
  RadioGroupOptions &
  Pick<RadioGroupState, "stack" | "size">;

export type RenderlesskitRadioGroupHTMLProps = BoxHTMLProps &
  RadioGroupHTMLProps;

export type RenderlesskitRadioGroupProps = RenderlesskitRadioGroupOptions &
  RenderlesskitRadioGroupHTMLProps;

export const useRenderlesskitRadioGroup = createHook<
  RenderlesskitRadioGroupOptions,
  RenderlesskitRadioGroupHTMLProps
>({
  name: "RenderlesskitRadioGroup",
  compose: [useBox, useRadioGroup],
  keys: RENDERLESSKIT_RADIO_GROUP_KEYS,

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

export const RenderlesskitRadioGroup = createComponent({
  as: "div",
  memo: true,
  useHook: useRenderlesskitRadioGroup,
});
