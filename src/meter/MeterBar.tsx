import { cx } from "ariakit-utils";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";

import { MeterUIProps } from "./MeterProps";

export const useMeterBar = createHook<MeterBarOptions>(
  ({
    state,
    size,
    themeColor,
    intervals,
    flatBorders,
    label,
    hint,
    ...props
  }) => {
    const theme = useTheme("meter");
    const className = cx(
      theme.bar,
      size
        ? cx(
            theme.size[size]?.bar.base,
            !flatBorders ? theme.size[size]?.bar.roundedBorders : "",
          )
        : "",
      themeColor ? theme.themeColor[themeColor]?.bar : "",
      props.className,
    );
    const style = { width: `${state?.percent}%`, ...props.style };

    props = { ...props, style, className };
    props = useBox(props);

    return props;
  },
);

export const MeterBar = createComponent<MeterBarOptions>(props => {
  const htmlProps = useMeterBar(props);

  return createElement("div", htmlProps);
});

export type MeterBarOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<MeterUIProps> & {};

export type MeterBarProps<T extends As = "div"> = Props<MeterBarOptions<T>>;
