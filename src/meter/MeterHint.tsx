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

export const useMeterHint = createHook<MeterHintOptions>(
  ({ state, size, intervals, flatBorders, label, hint, ...props }) => {
    const theme = useTheme("meter");
    const className = cx(
      theme.hint.common,
      size ? theme.hint.size[size] : "",
      props.className,
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const MeterHint = createComponent<MeterHintOptions>(props => {
  const htmlProps = useMeterHint(props);

  return createElement("div", htmlProps);
});

export type MeterHintOptions<T extends As = "div"> = BoxOptions<T> &
  Partial<MeterUIProps> & {};

export type MeterHintProps<T extends As = "div"> = Props<MeterHintOptions<T>>;
