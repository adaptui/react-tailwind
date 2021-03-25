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

const InputElement = forwardRefWithAs<
  BoxProps & InputAddonProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const htmlRef = React.useRef<HTMLDivElement>();
  const { as, className, children, type, allowPointerEvents, ...rest } = props;

  const theme = useTheme();
  const prefixStyles = cx(
    theme.input.children.base,
    theme.input.children[type],
    allowPointerEvents ? "" : theme.input.children.pointerEventsNone,
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

const InputAddon = forwardRefWithAs<
  BoxProps & Pick<InputAddonProps, "type">,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const htmlRef = React.useRef<HTMLDivElement>();
  const { as, className, children, type, ...rest } = props;

  const theme = useTheme();
  const prefixStyles = cx(
    theme.input.group.children.base,
    theme.input.group.children[type],
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

// InputParts
export const InputPrefix: AddonElement = forwardRefWithAs((props, ref) => (
  <InputElement {...props} type="prefix" ref={ref} />
));
InputPrefix.id = AddonTypes.InputPrefix;

export const InputSuffix: AddonElement = forwardRefWithAs((props, ref) => (
  <InputElement {...props} type="suffix" ref={ref} />
));
InputSuffix.id = AddonTypes.InputSuffix;

// GroupParts
export const InputGroupPrefix: AddonElement = forwardRefWithAs((props, ref) => (
  <InputAddon {...props} type="prefix" ref={ref} />
));
InputGroupPrefix.id = AddonTypes.InputGroupPrefix;

export const InputGroupSuffix: AddonElement = forwardRefWithAs((props, ref) => (
  <InputAddon {...props} type="suffix" ref={ref} />
));
InputGroupSuffix.id = AddonTypes.InputGroupSuffix;
