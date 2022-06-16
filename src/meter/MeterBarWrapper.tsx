import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { MeterUIProps } from "./MeterProps";

export const useMeterBarWrapper = createHook<MeterBarWrapperOptions>(
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
      theme.barWrapper.base,
      size ? theme.size[size]?.barWrapper : "",
      flatBorders ? theme.barWrapper.flatBorders : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const MeterBarWrapper = createComponent<MeterBarWrapperOptions>(
  props => {
    const htmlProps = useMeterBarWrapper(props);

    return createElement("div", htmlProps);
  },
);

export type MeterBarWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<MeterUIProps> & {};

export type MeterBarWrapperProps<T extends As = "div"> = Props<
  MeterBarWrapperOptions<T>
>;
