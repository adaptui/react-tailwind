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
  ({ collapsed = false, variant = "solid", size = "md", ...props }) => {
    const theme = useTheme("buttonGroup");
    const className = cx(
      theme.base,
      collapsed ? theme.collapsed : theme.notCollapsed,
      props.className,
    );

    props = useWrapElement(
      props,
      element => {
        return (
          <ButtonGroupContextProvider
            size={size}
            variant={variant}
            collapsed={collapsed}
          >
            {element}
          </ButtonGroupContextProvider>
        );
      },
      [size, variant, collapsed],
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

export type ButtonGroupOptions<T extends As = "div"> = BoxOptions<T> & {
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];

  /**
   * Whether the button borders are collapsed or not.
   */
  collapsed?: boolean;
};

export type ButtonGroupProps<T extends As = "div"> = Props<
  ButtonGroupOptions<T>
>;
