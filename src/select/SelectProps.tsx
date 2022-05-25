import * as React from "react";

import { useSafeLayoutEffect } from "../hooks";
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
  const prefixRef = React.useRef<HTMLElement>(null);
  const suffixRef = React.useRef<HTMLElement>(null);

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

  const wrapperProps: SelectWrapperProps = {
    ...uiProps,
    className,
    style,
    ...componentProps.wrapperProps,
  };

  const baseProps: SelectBaseProps = {
    ...uiProps,
    disabled,
    ...restProps,
    style: { ...selectInlineStyles.current },
    children: finalChildren,
    ...componentProps.baseProps,
  };

  const prefixProps: SelectPrefixProps = {
    ...uiProps,
    disabled,
    ...componentProps.prefixProps,
    ref: prefixRef,
    children: withIconA11y(runIfFn(uiProps.prefix, uiProps)),
  };

  const suffixProps: SelectSuffixProps = {
    ...uiProps,
    disabled,
    ...componentProps.suffixProps,
    ref: suffixRef,
    children: uiProps.suffix,
  };

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
