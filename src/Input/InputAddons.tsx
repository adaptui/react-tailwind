import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { useMergeRefs } from "../hooks";
import { forwardRefWithAs } from "../utils/types";

type InputAddonProps = {
  type: "prefix" | "suffix";
};

const InputElement = forwardRefWithAs<
  BoxProps & InputAddonProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const htmlRef = React.useRef<HTMLDivElement>();
  const { as, className, children, type, ...rest } = props;

  const theme = useTheme();
  const prefixStyles = cx(theme.input.input[type], className);

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
  const prefixStyles = cx(theme.input.group[type], className);

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

export const InputPrefix = forwardRefWithAs<
  Omit<InputAddonProps, "type">,
  HTMLDivElement,
  "div"
>((props, ref) => {
  return <InputElement {...props} type="prefix" ref={ref} />;
});
(InputPrefix as any).id = AddonTypes.InputPrefix;

export const InputSuffix = forwardRefWithAs<
  Omit<InputAddonProps, "type">,
  HTMLDivElement,
  "div"
>((props, ref) => {
  return <InputElement {...props} type="suffix" ref={ref} />;
});
(InputSuffix as any).id = AddonTypes.InputSuffix;

export const InputGroupPrefix = forwardRefWithAs<
  Omit<InputAddonProps, "type">,
  HTMLDivElement,
  "div"
>((props, ref) => {
  return <InputAddon {...props} type="prefix" ref={ref} />;
});
(InputGroupPrefix as any).id = AddonTypes.InputGroupPrefix;

export const InputGroupSuffix = forwardRefWithAs<
  Omit<InputAddonProps, "type">,
  HTMLDivElement,
  "div"
>((props, ref) => {
  return <InputAddon {...props} type="suffix" ref={ref} />;
});
(InputGroupSuffix as any).id = AddonTypes.InputGroupSuffix;
