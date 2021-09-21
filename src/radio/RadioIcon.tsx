import { cx } from "@renderlesskit/react";
import { createComponent, createHook } from "reakit-system";

import { tcm } from "../utils";
import { useTheme } from "../theme";
import { RADIO_ICON_KEYS } from "./__keys";
import { RadioStateReturn } from "./RadioState";
import { BoxOptions, BoxHTMLProps, useBox } from "../box";

export type RadioIconOptions = BoxOptions &
  Pick<RadioStateReturn, "size" | "isChecked">;

export type RadioIconHTMLProps = BoxHTMLProps;

export type RadioIconProps = RadioIconOptions & RadioIconHTMLProps;

export const useRadioIcon = createHook<RadioIconOptions, RadioIconHTMLProps>({
  name: "RadioIcon",
  compose: useBox,
  keys: RADIO_ICON_KEYS,

  useProps(options, htmlProps) {
    const { size, isChecked } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const theme = useTheme("radio");
    const className = cx(
      theme.icon.base,
      theme.icon.size[size],
      isChecked
        ? tcm(
            theme.icon.checked.default,
            theme.icon.checked.hover,
            theme.icon.checked.active,
            theme.icon.checked.focus,
            theme.icon.checked.disabled,
          )
        : tcm(
            theme.icon.unChecked.default,
            theme.icon.unChecked.hover,
            theme.icon.unChecked.active,
            theme.icon.unChecked.focus,
            theme.icon.unChecked.disabled,
          ),
      htmlClassName,
    );

    return { className, ...restHtmlProps };
  },
});

export const RadioIcon = createComponent({
  as: "span",
  memo: true,
  useHook: useRadioIcon,
});
