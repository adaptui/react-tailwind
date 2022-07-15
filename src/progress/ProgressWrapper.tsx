import { GroupOptions, useGroup } from "ariakit";
import { createElement, createHook } from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";
import { ProgressOptions, useProgress } from "@adaptui/react";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { createComponent, tcm } from "../utils";

import { ProgressUIProps } from "./ProgressProps";

export const useProgressWrapper = createHook<ProgressWrapperOptions>(
  ({ state, size, themeColor, label, hint, ...props }) => {
    const theme = useTheme("progress");
    const className = tcm(theme.wrapper, props.className);

    props = { ...props, className };
    props = useProgress({ state, ...props });
    props = useGroup(props);
    props = useBox(props);

    return props;
  },
);

export const ProgressWrapper = createComponent<ProgressWrapperOptions>(
  props => {
    const htmlProps = useProgressWrapper(props);

    return createElement("div", htmlProps);
  },
  "ProgressWrapper",
);

export type ProgressWrapperOptions<T extends As = "div"> = BoxOptions<T> &
  GroupOptions<T> &
  ProgressOptions<T> &
  Partial<ProgressUIProps> & {};

export type ProgressWrapperProps<T extends As = "div"> = Props<
  ProgressWrapperOptions<T>
>;
