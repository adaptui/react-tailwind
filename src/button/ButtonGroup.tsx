import * as React from "react";
import { cx } from "@renderlesskit/react";

import { Box, BoxProps } from "../box";
import { createContext } from "../utils";
import { useTheme } from "../theme";
import { forwardRefWithAs } from "../utils/types";

export type ButtonGroupProps = BoxProps & {
  /**
   * How large should the button be?
   */
  size?: keyof Renderlesskit.GetThemeValue<"button", "size">;
  /**
   * How the button should be styled?
   */
  variant?: keyof Renderlesskit.GetThemeValue<"button", "variant">;
  /**
   * Button will look collapsed together.
   */
  isAttached?: boolean;
};

export type ButtonGroupContext = Pick<ButtonGroupProps, "size" | "variant">;

const [ButtonGroupProvider, useButtonGroup] = createContext<ButtonGroupContext>(
  {
    strict: false,
    name: "ButtonGroupContext",
  },
);

export { useButtonGroup };

export const ButtonGroup = forwardRefWithAs<ButtonGroupProps, "div">(
  (props, ref) => {
    const { size, variant, isAttached, className, ...rest } = props;
    const context = React.useMemo(() => ({ size, variant }), [size, variant]);

    const theme = useTheme();
    const buttonGroupStyles = cx(
      theme.buttonGroup.base,
      isAttached ? theme.buttonGroup.attached : "lib:space-x-1",
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
  },
);

export default ButtonGroup;
