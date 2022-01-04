import { createHook } from "reakit-system";
import { createComponent } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SWITCH_DESCRIPTION_KEYS } from "./__keys";
import { SwitchStateReturn } from "./SwitchState";

export type SwitchDescriptionOptions = BoxOptions &
  Pick<SwitchStateReturn, "size">;

export type SwitchDescriptionHTMLProps = BoxHTMLProps;

export type SwitchDescriptionProps = SwitchDescriptionOptions &
  SwitchDescriptionHTMLProps;

export const useSwitchDescription = createHook<
  SwitchDescriptionOptions,
  SwitchDescriptionHTMLProps
>({
  name: "SwitchDescription",
  compose: useBox,
  keys: SWITCH_DESCRIPTION_KEYS,

  useProps(options, htmlProps) {
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("switch");
    const className = cx(
      theme.description.common,
      theme.description.size[size],
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const SwitchDescription = createComponent({
  as: "div",
  memo: true,
  useHook: useSwitchDescription,
});
