import { ProgressOptions, useProgress } from "@renderlesskit/react";
import { GroupProps, useGroup } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { ProgressUIProps } from "./ProgressProps";

export const useProgressWrapper = createHook<ProgressWrapperOptions>(
  ({ state, size, label, hint, ...props }) => {
    const theme = useTheme("progress");
    const className = tcm(theme.wrapper, props.className);

    props = { ...props, className };
    props = useProgress({ state, ...props });
    props = useGroup(props);

    return props;
  },
);

export const ProgressWrapper = createComponent<ProgressWrapperOptions>(
  props => {
    const htmlProps = useProgressWrapper(props);

    return createElement("div", htmlProps);
  },
);

export type ProgressWrapperOptions<T extends As = "div"> = GroupProps<T> &
  ProgressOptions<T> &
  Partial<ProgressUIProps> & {};

export type ProgressWrapperProps<T extends As = "div"> = Props<
  ProgressWrapperOptions<T>
>;
