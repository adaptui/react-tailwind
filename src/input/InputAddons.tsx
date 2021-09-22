import { useRef } from "react";

import { Box, BoxProps } from "../box";
import { useMergeRefs } from "../hooks";
import { useTheme } from "../theme";
import { tcm } from "../utils";
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
  const htmlRef = useRef<HTMLDivElement>();
  const { as, className, children, type, allowPointerEvents, ...rest } = props;

  const theme = useTheme();
  const prefixStyles = tcm(
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
  const htmlRef = useRef<HTMLDivElement>();
  const { as, className, children, type, ...rest } = props;

  const theme = useTheme();
  const prefixStyles = tcm(
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
