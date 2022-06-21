import * as React from "react";
import { useForkRef, useSafeLayoutEffect } from "ariakit-utils";

import { getComponentProps, RenderProp, runIfFn, withIconA11y } from "../utils";

import { InputBaseProps } from "./InputBase";
import { InputPrefixProps } from "./InputPrefix";
import { InputSuffixProps } from "./InputSuffix";
import {
  InputUIState,
  InputUIStateProps,
  useInputUIState,
} from "./InputUIState";
import { InputWrapperProps } from "./InputWrapper";

const componentMap = {
  InputWrapper: "wrapperProps",
  InputBase: "baseProps",
  InputPrefix: "prefixProps",
  InputSuffix: "suffixProps",
};

export const useInputProps = ({
  prefix,
  suffix,
  size,
  variant,
  invalid,
  loading,
  spinner,
  className,
  style,
  children,
  disabled,
  ...restProps
}: InputProps): InputPropsReturn => {
  const uiState = useInputUIState({
    prefix,
    suffix,
    size,
    variant,
    invalid,
    loading,
    spinner,
  });
  let uiProps: InputUIProps = uiState;

  const { componentProps } = getComponentProps(componentMap, children, uiProps);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setHasPaddingCalculated] = React.useState(false);

  const _prefix: InputProps["prefix"] =
    componentProps?.prefixProps?.children || uiProps.prefix;
  const __suffix: InputProps["suffix"] =
    componentProps?.suffixProps?.children || uiProps.suffix;
  const _suffix: InputProps["suffix"] = React.useMemo(() => {
    return uiProps.loading
      ? runIfFn(uiProps.spinner, uiProps)
      : withIconA11y(runIfFn(__suffix, uiProps));
  }, [uiProps, __suffix]);

  uiProps = { ...uiProps, prefix: _prefix, suffix: _suffix };

  const inputInlineStyles = React.useRef<Record<string, any>>({});
  let prefixRef = React.useRef<HTMLElement>(null);
  let suffixRef = React.useRef<HTMLElement>(null);
  prefixRef = useForkRef(
    prefixRef,
    componentProps?.prefixProps?.ref,
  ) as unknown as React.RefObject<HTMLElement>;
  suffixRef = useForkRef(
    suffixRef,
    componentProps?.suffixProps?.ref,
  ) as unknown as React.RefObject<HTMLElement>;
  useSafeLayoutEffect(() => {
    let key = "";

    const prefixElement = prefixRef.current;
    const suffixElement = suffixRef.current;
    if (uiProps.prefix && prefixElement) {
      key = "paddingLeft";

      if (!key) return;
      inputInlineStyles.current[key] =
        prefixElement.getBoundingClientRect().width;
    }

    if (uiProps.suffix && suffixElement) {
      key = "paddingRight";

      if (!key) return;
      inputInlineStyles.current[key] =
        suffixElement.getBoundingClientRect().width;
    }

    setHasPaddingCalculated(true);
  }, [uiProps.prefix, uiProps.suffix]);

  const wrapperProps: InputWrapperProps = React.useMemo(
    () => ({
      ...uiProps,
      className,
      style,
      ...componentProps.wrapperProps,
    }),
    [className, componentProps.wrapperProps, style, uiProps],
  );

  const baseProps: InputBaseProps = React.useMemo(
    () => ({
      ...uiProps,
      disabled,
      ...restProps,
      style: { ...inputInlineStyles.current },
      ...componentProps.baseProps,
    }),
    [componentProps.baseProps, disabled, restProps, uiProps],
  );

  const prefixProps: InputPrefixProps = React.useMemo(
    () => ({
      ...uiProps,
      disabled,
      ...componentProps.prefixProps,
      ref: prefixRef,
      children: withIconA11y(runIfFn(uiProps.prefix, uiProps)),
    }),
    [componentProps.prefixProps, disabled, uiProps],
  );

  const suffixProps: InputSuffixProps = React.useMemo(
    () => ({
      ...uiProps,
      disabled,
      ...componentProps.suffixProps,
      ref: suffixRef,
      children: uiProps.suffix,
    }),
    [componentProps.suffixProps, disabled, uiProps],
  );

  return {
    uiProps,
    wrapperProps,
    baseProps,
    prefixProps,
    suffixProps,
  };
};

export type InputUIProps = InputUIState;

export type InputProps = Omit<InputBaseProps, "children"> &
  InputUIStateProps & {
    children?: RenderProp<InputUIProps>;
  };

export type InputPropsReturn = {
  wrapperProps: InputWrapperProps;
  baseProps: InputBaseProps;
  prefixProps: InputPrefixProps;
  suffixProps: InputSuffixProps;
  uiProps: InputUIProps;
};
