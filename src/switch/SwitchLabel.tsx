import { createHook } from "reakit-system";
import { createComponent } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SWITCH_LABEL_KEYS } from "./__keys";
import { SwitchProps } from "./Switch";
import { SwitchStateReturn } from "./SwitchState";

export type SwitchLabelOptions = BoxOptions &
  Pick<SwitchStateReturn, "size" | "description" | "label"> & {
    disabled?: SwitchProps["disabled"];
  };

export type SwitchLabelHTMLProps = BoxHTMLProps;

export type SwitchLabelProps = SwitchLabelOptions & SwitchLabelHTMLProps;

export const useSwitchLabel = createHook<
  SwitchLabelOptions,
  SwitchLabelHTMLProps
>({
  name: "SwitchLabel",
  compose: useBox,
  keys: SWITCH_LABEL_KEYS,

  useProps(options, htmlProps) {
    const { disabled, description, size, label } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("switch");
    const className = cx(
      theme.label.common,
      label && !description ? theme.label.size[size] : "",
      label && !description ? (disabled ? "" : theme.label.only) : "",
      disabled ? theme.label.disabled : "",
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const SwitchLabel = createComponent({
  as: "label",
  memo: true,
  useHook: useSwitchLabel,
});
