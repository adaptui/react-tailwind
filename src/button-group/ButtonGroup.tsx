import { useWrapElement } from "ariakit-utils";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-utils/system";
import { As, Props } from "ariakit-utils/types";

import { BoxOptions, useBox } from "../box";
import { ButtonProps } from "../button";
import { useTheme } from "../theme";
import { cx } from "../utils";

import { ButtonGroupContextProvider } from "./__utils";

export const useButtonGroup = createHook<ButtonGroupOptions>(
  ({
    type = "collapsed",
    size = "md",
    themeColor = "base",
    variant = "solid",
    ...props
  }) => {
    const theme = useTheme("buttonGroup");
    const className = cx(
      theme.base,
      type === "collapsed" ? theme.collapsed : theme.group,
      props.className,
    );

    props = useWrapElement(
      props,
      element => {
        return (
          <ButtonGroupContextProvider
            size={size}
            themeColor={themeColor}
            variant={variant}
            type={type}
          >
            {element}
          </ButtonGroupContextProvider>
        );
      },
      [size, variant, themeColor, type],
    );

    props = { ...props, className };
    props = useBox(props);

    return props;
  },
);

export const ButtonGroup = createComponent<ButtonGroupOptions>(props => {
  const htmlProps = useButtonGroup(props);

  return createElement("div", htmlProps);
});

export type ButtonGroupOptions<T extends As = "div"> = BoxOptions<T> &
  Pick<ButtonProps, "size" | "themeColor" | "variant"> & {
    /**
     * Whether the button borders are collapsed or not.
     */
    type?: "group" | "collapsed";
  };

export type ButtonGroupProps<T extends As = "div"> = Props<
  ButtonGroupOptions<T>
>;
