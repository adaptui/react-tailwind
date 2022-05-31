import { GroupProps, useGroup } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";
import { ProgressOptions, useProgress } from "@adaptui/react";

import { useTheme } from "../theme";
import { tcm } from "../utils";

import { CircularProgressUIProps } from "./CircularProgressProps";

export const useCircularProgressWrapper =
  createHook<CircularProgressWrapperOptions>(
    ({ state, size, hint, ...props }) => {
      const theme = useTheme("circularProgress");
      const className = tcm(theme.wrapper, props.className);

      props = { ...props, className };
      props = useProgress({ state, ...props });
      props = useGroup(props);

      return props;
    },
  );

export const CircularProgressWrapper =
  createComponent<CircularProgressWrapperOptions>(props => {
    const htmlProps = useCircularProgressWrapper(props);

    return createElement("div", htmlProps);
  });

export type CircularProgressWrapperOptions<T extends As = "div"> =
  GroupProps<T> & ProgressOptions<T> & Partial<CircularProgressUIProps> & {};

export type CircularProgressWrapperProps<T extends As = "div"> = Props<
  CircularProgressWrapperOptions<T>
>;
