import { GroupOptions, useGroup } from "ariakit";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";
import { ProgressOptions, useProgress } from "@adaptui/react";

import { BoxOptions, useBox } from "../box";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { CircularProgressUIProps } from "./CircularProgressProps";

export const useCircularProgressWrapper =
  createHook<CircularProgressWrapperOptions>(
    ({ state, size, themeColor, hint, ...props }) => {
      const theme = useTheme("circularProgress");
      const className = cx(theme.wrapper, props.className);

      props = { ...props, className };
      props = useProgress({ state, ...props });
      props = useGroup(props);
      props = useBox(props);

      return props;
    },
  );

export const CircularProgressWrapper =
  createComponent<CircularProgressWrapperOptions>(props => {
    const htmlProps = useCircularProgressWrapper(props);

    return createElement("div", htmlProps);
  });

export type CircularProgressWrapperOptions<T extends As = "div"> =
  BoxOptions<T> &
    GroupOptions<T> &
    ProgressOptions<T> &
    Partial<CircularProgressUIProps> & {};

export type CircularProgressWrapperProps<T extends As = "div"> = Props<
  CircularProgressWrapperOptions<T>
>;
