import * as React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { ButtonProps } from "./Button";
import { createContext } from "../utils";
import { forwardRefWithAs } from "../utils/types";

export type ButtonGroupContext = Pick<ButtonGroupProps, "size" | "variant">;

const [ButtonGroupProvider, useButtonGroup] = createContext<ButtonGroupContext>(
  {
    strict: false,
    name: "ButtonGroupContext",
  },
);

export { useButtonGroup };

export type ButtonGroupProps = BoxProps &
  Pick<ButtonProps, "size" | "variant"> & {
    /**
     * Button will look collapsed together.
     *
     * @default false
     */
    attached?: boolean;
  };

export const ButtonGroup = forwardRefWithAs<
  ButtonGroupProps,
  HTMLDivElement,
  "div"
>((props, ref) => {
  const {
    size = "lg",
    variant = "primary",
    attached = false,
    className,
    ...rest
  } = props;
  const context = React.useMemo(() => ({ size, variant }), [size, variant]);

  const theme = useTheme();
  const buttonGroupStyles = cx(
    theme.buttonGroup.base,
    attached ? theme.buttonGroup.attached : theme.buttonGroup.notAttached,
    className,
  );

  return (
    <ButtonGroupProvider value={context}>
      <Box
        ref={ref}
        role="group"
        aria-label="Button group"
        className={buttonGroupStyles}
        {...rest}
      />
    </ButtonGroupProvider>
  );
});

export default ButtonGroup;
