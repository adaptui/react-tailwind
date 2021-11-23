import * as React from "react";
import { createComponent, createHook } from "reakit-system";

import { BoxHTMLProps, BoxOptions, useBox } from "../box";
import { ButtonProps } from "../button";
import { useTheme } from "../theme";
import { createContext, tcm } from "../utils";

import { BUTTON_GROUP_KEYS } from "./__keys";

export type ButtonGroupOptions = BoxOptions & {
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];

  /**
   * Whether the button borders are collapsed or not.
   */
  collapsed?: boolean;
};

export type ButtonGroupHTMLProps = BoxHTMLProps;

export type ButtonGroupProps = ButtonGroupOptions & ButtonGroupHTMLProps;

export const useButtonGroup = createHook<
  ButtonGroupOptions,
  ButtonGroupHTMLProps
>({
  name: "ButtonGroup",
  compose: useBox,
  keys: BUTTON_GROUP_KEYS,

  useOptions(options, htmlProps) {
    return { collapsed: false, variant: "solid", size: "md", ...options };
  },

  useProps(options, htmlProps) {
    const { collapsed, size, variant } = options;
    const {
      className: htmlClassName,
      wrapElement: htmlWrapElement,
      ...restHtmlProps
    } = htmlProps;

    const theme = useTheme("buttonGroup");
    const className = tcm(
      theme.base,
      collapsed ? theme.collapsed : theme.notCollapsed,
      htmlClassName,
    );

    const wrapElement = React.useCallback(
      (element: React.ReactNode) => {
        element = (
          <ButtonGroupContextProvider size={size} variant={variant}>
            {element}
          </ButtonGroupContextProvider>
        );

        if (htmlWrapElement) {
          element = htmlWrapElement(element);
        }

        return element;
      },
      [htmlWrapElement, size, variant],
    );

    return { className, wrapElement, ...restHtmlProps };
  },
});

export const ButtonGroup = createComponent({
  as: "div",
  memo: true,
  useHook: useButtonGroup,
});

const [ButtonGroupContextProvider, useButtonGroupContext] =
  createContext<ButtonGroupOptions>({
    name: "ButtonGroupContext",
    strict: false,
  });

export { ButtonGroupContextProvider, useButtonGroupContext };
