import * as React from "react";
import { cx } from "@renderlesskit/react";

import { Box, BoxProps } from "../box";
import { createContext } from "../utils";
import { useTheme } from "../theme";
import { forwardRefWithAs } from "../utils/types";
import { ButtonProps } from "./Button";

export type ButtonGroupContext = Pick<ButtonGroupProps, "size" | "variant">;

const [ButtonGroupProvider, useButtonGroup] = createContext<ButtonGroupContext>(
  {
    strict: false,
    name: "ButtonGroupContext",
  },
);

export { useButtonGroup };

export type ButtonGroupProps = BoxProps & {
  /**
   * How large should the button be?
   *
   * @default "lg"
   */
  size?: ButtonProps["size"];
  /**
   * How the button should be styled?
   *
   * @default "primary"
   */
  variant?: ButtonProps["variant"];
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
        role="group"
        aria-label="Button group"
        className={buttonGroupStyles}
        ref={ref}
        {...rest}
      />
    </ButtonGroupProvider>
  );
});

export default ButtonGroup;
