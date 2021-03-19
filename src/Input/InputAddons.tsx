import React from "react";
import { cx } from "@renderlesskit/react";
import { useTheme } from "../theme";
import { forwardRefWithAs } from "../utils/types";
import { Box, BoxProps } from "../box";
import { useMergeRefs } from "../hooks";

type InputAddonProps = BoxProps & {
  type: "prefix" | "suffix";
};

const InputAddon = forwardRefWithAs<InputAddonProps, HTMLDivElement, "div">(
  (props, ref) => {
    const htmlRef = React.useRef<HTMLDivElement>();
    const { children, type } = props;
    const theme = useTheme();

    const prefixStyles = cx(theme.input.addon[type]);

    return (
      <Box ref={useMergeRefs(ref, htmlRef)} className={prefixStyles}>
        {children}
      </Box>
    );
  },
);

type AddonElement = React.ForwardRefExoticComponent<
  {
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLDivElement>
> & { id?: string };

export const InputAddonPrefix: AddonElement = React.forwardRef((props, ref) => {
  return <InputAddon type="prefix" {...props} ref={ref} />;
});
InputAddonPrefix.id = "InputAddonPrefix";

export const InputAddonSuffix: AddonElement = React.forwardRef((props, ref) => {
  return <InputAddon type="suffix" {...props} ref={ref} />;
});
InputAddonSuffix.id = "InputAddonSuffix";
