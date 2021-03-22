import React from "react";
import { cx } from "@renderlesskit/react";
import { useTheme } from "../theme";
import { forwardRefWithAs } from "../utils/types";
import { Box, BoxProps } from "../box";
import { useMergeRefs } from "../hooks";

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

export const InputAddonPrefix = forwardRefWithAs<
  Omit<InputAddonProps, "type">,
  HTMLDivElement,
  "div"
>((props, ref) => {
  return <InputAddon {...props} type="prefix" ref={ref} />;
});
(InputAddonPrefix as any).id = "InputAddonPrefix";

export const InputAddonSuffix = forwardRefWithAs<
  Omit<InputAddonProps, "type">,
  HTMLDivElement,
  "div"
>((props, ref) => {
  return <InputAddon {...props} type="suffix" ref={ref} />;
});
(InputAddonSuffix as any).id = "InputAddonSuffix";

export const InputPrefix = forwardRefWithAs<
  Omit<InputAddonProps, "type">,
  HTMLDivElement,
  "div"
>((props, ref) => {
  return <InputElement {...props} type="prefix" ref={ref} />;
});
(InputPrefix as any).id = "InputPrefix";

export const InputSuffix = forwardRefWithAs<
  Omit<InputAddonProps, "type">,
  HTMLDivElement,
  "div"
>((props, ref) => {
  return <InputElement {...props} type="suffix" ref={ref} />;
});
(InputSuffix as any).id = "InputSuffix";
