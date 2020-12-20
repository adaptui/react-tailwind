import * as React from "react";

import theme from "../theme";
import { Box, BoxProps } from "../box";
import { createContext, ocx } from "../utils";
import { forwardRefWithAs } from "../utils/types";

export type ButtonGroupProps = BoxProps & {
  /**
   * Button will look collapsed together.
   */
  isAttached?: boolean;
  /**
   * How large should the button be?
   */
  size?: "xs" | "sm" | "md" | "lg";
  /**
   * How the button should be styled?
   */
  variant?: "primary" | "secondary" | "link";
};

export type ButtonGroupContext = Pick<
  ButtonGroupProps,
  "size" | "variant"
> & {};

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

    const buttonGroupStyles = ocx(
      theme.buttonGroup.base,
      isAttached ? theme.buttonGroup.attached : "",
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
