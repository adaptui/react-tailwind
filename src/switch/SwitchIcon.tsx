import { createComponent, createHook } from "reakit-system";
import { cx } from "@renderlesskit/react";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

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
        theme.icon.wrapper.base,
        theme.icon.wrapper.size[size],
        description ? theme.icon.wrapper.description : "",
        isChecked ? theme.icon.wrapper.checked : theme.icon.wrapper.unChecked,
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
