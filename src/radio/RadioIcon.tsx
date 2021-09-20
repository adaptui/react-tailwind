import { cx } from "@renderlesskit/react";
import { createComponent, createHook } from "reakit-system";

import { tcm } from "../utils";
import { useTheme } from "../theme";
import { RADIO_ICON_KEYS } from "./__keys";
import { RadioStateReturn } from "./RadioState";
import { BoxOptions, BoxHTMLProps, useBox } from "../box";

export type RadioIconOptions = BoxOptions & Pick<RadioStateReturn, "size">;

export type RadioIconHTMLProps = BoxHTMLProps;

export type RadioIconProps = RadioIconOptions & RadioIconHTMLProps;

export const useRadioIcon = createHook<RadioIconOptions, RadioIconHTMLProps>({
  name: "RadioIcon",
  compose: useBox,
  keys: RADIO_ICON_KEYS,

  useProps(options, htmlProps) {
    const { size } = options;
    const { className: htmlClassName, ...restHtmlProps } = htmlProps;

    const checkbox = useTheme("checkbox");
    const className = cx(
      checkbox.icon.base,
      checkbox.icon.size[size],
      // isUnchecked
      //   ? tcm(
      //       checkbox.icon.unChecked.default,
      //       checkbox.icon.unChecked.hover,
      //       checkbox.icon.unChecked.active,
      //       checkbox.icon.unChecked.focus,
      //       checkbox.icon.unChecked.disabled,
      //     )
      //   : "",
      // isChecked
      //   ? tcm(
      //       checkbox.icon.checked.default,
      //       checkbox.icon.checked.hover,
      //       checkbox.icon.checked.active,
      //       checkbox.icon.checked.focus,
      //       checkbox.icon.checked.disabled,
      //     )
      //   : "",
      // isIndeterminate
      //   ? tcm(
      //       checkbox.icon.checked.default,
      //       checkbox.icon.indeterminate.hover,
      //       checkbox.icon.indeterminate.active,
      //       checkbox.icon.indeterminate.focus,
      //       checkbox.icon.indeterminate.disabled,
      //     )
      //   : "",
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
