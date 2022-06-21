import * as React from "react";
import { useForkRef, useSafeLayoutEffect } from "ariakit-utils";

import { getComponentProps, RenderProp, runIfFn, withIconA11y } from "../utils";

import { SelectBaseProps } from "./SelectBase";
import { SelectPrefixProps } from "./SelectPrefix";
import { SelectSuffixProps } from "./SelectSuffix";
import {
  SelectUIState,
  SelectUIStateProps,
  useSelectUIState,
} from "./SelectUIState";
import { SelectWrapperProps } from "./SelectWrapper";

const componentMap = {
  SelectWrapper: "wrapperProps",
  SelectBase: "baseProps",
  SelectPrefix: "prefixProps",
  SelectSuffix: "suffixProps",
};

export const useSelectProps = ({
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
}: SelectProps): SelectPropsReturn => {
  const uiState = useSelectUIState({
    prefix,
    suffix,
    size,
    variant,
    invalid,
    loading,
    spinner,
  });
  let uiProps: SelectUIProps = uiState;

  const { componentProps, finalChildren } = getComponentProps(
    componentMap,
    children,
    uiProps,
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setHasPaddingCalculated] = React.useState(false);

  const _prefix: SelectProps["prefix"] =
    componentProps?.prefixProps?.children || uiProps.prefix;
  const __suffix: SelectProps["suffix"] =
    componentProps?.suffixProps?.children || uiProps.suffix;
  const _suffix: SelectProps["suffix"] = React.useMemo(() => {
    return uiProps.loading
      ? runIfFn(uiProps.spinner, uiProps)
      : withIconA11y(runIfFn(__suffix, uiProps));
  }, [uiProps, __suffix]);

  uiProps = { ...uiProps, prefix: _prefix, suffix: _suffix };

  const selectInlineStyles = React.useRef<Record<string, any>>({});
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
      selectInlineStyles.current[key] =
        prefixElement.getBoundingClientRect().width;
    }

    if (uiProps.suffix && suffixElement) {
      key = "paddingRight";

      if (!key) return;
      selectInlineStyles.current[key] =
        suffixElement.getBoundingClientRect().width;
    }

    setHasPaddingCalculated(true);
  }, [uiProps.prefix, uiProps.suffix]);

  const wrapperProps: SelectWrapperProps = React.useMemo(
    () => ({
      ...uiProps,
      className,
      style,
      ...componentProps.wrapperProps,
    }),
    [className, componentProps.wrapperProps, style, uiProps],
  );

  const baseProps: SelectBaseProps = React.useMemo(
    () => ({
      ...uiProps,
      disabled,
      ...restProps,
      style: { ...selectInlineStyles.current },
      ...componentProps.baseProps,
      children: finalChildren,
    }),
    [componentProps.baseProps, disabled, finalChildren, restProps, uiProps],
  );

  const prefixProps: SelectPrefixProps = React.useMemo(
    () => ({
      ...uiProps,
      disabled,
      ...componentProps.prefixProps,
      ref: prefixRef,
      children: withIconA11y(runIfFn(uiProps.prefix, uiProps)),
    }),
    [componentProps.prefixProps, disabled, uiProps],
  );

  const suffixProps: SelectSuffixProps = React.useMemo(
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

export type SelectUIProps = SelectUIState;

export type SelectProps = Omit<SelectBaseProps, "children"> &
  SelectUIStateProps & {
    children?: RenderProp<SelectUIProps>;
  };

export type SelectPropsReturn = {
  wrapperProps: SelectWrapperProps;
  baseProps: SelectBaseProps;
  prefixProps: SelectPrefixProps;
  suffixProps: SelectSuffixProps;
  uiProps: SelectUIProps;
};
