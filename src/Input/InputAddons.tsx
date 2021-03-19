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
  const { allowPointerEvents, children, type } = props;
  const theme = useTheme();

  const prefixStyles = cx(
    theme.input.addon[type],
    allowPointerEvents ? "" : theme.input.addon.pointerEventsNone,
  );

  return (
    <Box ref={useMergeRefs(ref, htmlRef)} className={prefixStyles}>
      {children}
    </Box>
  );
});

type AddonElement = React.ForwardRefExoticComponent<
  Pick<InputAddonProps, "allowPointerEvents"> &
    Omit<React.RefAttributes<HTMLDivElement>, "type"> & {
      children?: React.ReactNode;
    }
> & { id?: string };

export const InputAddonPrefix: AddonElement = React.forwardRef((props, ref) => {
  return <InputAddon {...props} type="prefix" ref={ref} />;
});
InputAddonPrefix.id = "InputAddonPrefix";

export const InputAddonSuffix: AddonElement = React.forwardRef((props, ref) => {
  return <InputAddon {...props} type="suffix" ref={ref} />;
});
InputAddonSuffix.id = "InputAddonSuffix";
