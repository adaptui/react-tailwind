import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { SWITCH_ICON_KEYS } from "./__keys";
import { SwitchProps } from "./Switch";
import { SwitchStateReturn } from "./SwitchState";

export type SwitchIconOptions = BoxOptions &
  Pick<SwitchStateReturn, "isChecked" | "size"> & {
    description?: SwitchProps["description"];
  };

export type SwitchIconHTMLProps = BoxHTMLProps;

export type SwitchIconProps = SwitchIconOptions & SwitchIconHTMLProps;

export const useSwitchIcon = createHook<SwitchIconOptions, SwitchIconHTMLProps>(
  {
    name: "SwitchIcon",
    compose: useBox,
    keys: SWITCH_ICON_KEYS,

    useProps(options, htmlProps) {
      const { isChecked, size, description } = options;
      const { className: htmlClassName, ...restHtmlProps } = htmlProps;

      const theme = useTheme("switch");
      const className = cx(
        theme.icon.base,
        theme.icon.size[size],
        description ? theme.icon.description : "",
        isChecked
          ? cx(
              theme.icon.checked.default,
              theme.icon.checked.hover,
              theme.icon.checked.active,
              theme.icon.checked.focus,
              theme.icon.checked.disabled,
            )
          : cx(
              theme.icon.unChecked.default,
              theme.icon.unChecked.hover,
              theme.icon.unChecked.active,
              theme.icon.unChecked.focus,
              theme.icon.unChecked.disabled,
            ),
        htmlClassName,
      );

      return {
        role: "img",
        "aria-hidden": true,
        className,
        ...restHtmlProps,
      };
    },
  },
);

export const SwitchIcon = createComponent({
  as: "span",
  memo: true,
  useHook: useSwitchIcon,
});
