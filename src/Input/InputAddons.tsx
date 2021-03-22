import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useMergeRefs } from "../hooks";
import { ComponentWithAs, forwardRefWithAs } from "../utils/types";

type InputAddonProps = {
  type: "prefix" | "suffix";
  allowPointerEvents?: boolean;
};

const InputAddon = forwardRefWithAs<
  BoxProps & InputAddonProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const htmlRef = React.useRef<HTMLDivElement>();
  const { as, allowPointerEvents, className, children, type, ...rest } = props;
  const theme = useTheme();

  const prefixStyles = cx(
    theme.input.addon.base,
    theme.input.addon[type],
    typeof children === "string"
      ? type === "prefix"
        ? theme.input.addon.prefixPadding
        : theme.input.addon.suffixPadding
      : "",
    allowPointerEvents
      ? theme.input.addon.focus
      : theme.input.addon.pointerEventsNone,
    className,
  );

  return (
    <Box
      as={as}
      ref={useMergeRefs(ref, htmlRef)}
      className={prefixStyles}
      {...rest}
    >
      {children}
    </Box>
  );
});

const InputElement = forwardRefWithAs<
  BoxProps & Pick<InputAddonProps, "type">,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const htmlRef = React.useRef<HTMLDivElement>();
  const { as, className, children, type, ...rest } = props;
  const theme = useTheme();

  const prefixStyles = cx(
    theme.input.addonElement.base,
    theme.input.addonElement[type],
    typeof children === "string"
      ? type === "prefix"
        ? theme.input.addonElement.prefixPadding
        : theme.input.addonElement.suffixPadding
      : "",
    theme.input.addon.focus,
    className,
  );

  return (
    <Box
      as={as}
      ref={useMergeRefs(ref, htmlRef)}
      className={prefixStyles}
      {...rest}
    >
      {children}
    </Box>
  );
});

export enum AddonTypes {
  InputPrefix = "InputPrefix",
  InputSuffix = "InputSuffix",
  InputGroupPrefix = "InputGroupPrefix",
  InputGroupSuffix = "InputGroupSuffix",
}

type AddonElement = ComponentWithAs<Omit<InputAddonProps, "type">, "div"> & {
  id?: string;
};

// InputPrefixes
export const InputPrefix: AddonElement = forwardRefWithAs((props, ref) => (
  <InputAddon {...props} type="prefix" ref={ref} />
));
InputPrefix.id = AddonTypes.InputPrefix;

export const InputSuffix: AddonElement = forwardRefWithAs((props, ref) => (
  <InputAddon {...props} type="suffix" ref={ref} />
));
InputSuffix.id = AddonTypes.InputSuffix;

// GroupPrefixes
export const InputGroupPrefix: AddonElement = forwardRefWithAs((props, ref) => (
  <InputElement {...props} type="prefix" ref={ref} />
));
InputGroupPrefix.id = AddonTypes.InputGroupPrefix;

export const InputGroupSuffix: AddonElement = forwardRefWithAs((props, ref) => (
  <InputElement {...props} type="suffix" ref={ref} />
));
InputGroupSuffix.id = AddonTypes.InputGroupSuffix;
