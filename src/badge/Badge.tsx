import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";

export type BadgeProps = BoxProps & {
  /**
   * How large should the badge be?
   *
   * @default "md"
   */
  size?: keyof Renderlesskit.GetThemeValue<"badge", "size">;
  /**
   * How the badge should be styled?
   *
   * @default "primary"
   */
  variant?: keyof Renderlesskit.GetThemeValue<"badge", "variant">;
  isAttached?: boolean;
  position?: keyof Renderlesskit.GetThemeValue<"badge", "position">;
};

export const Badge = forwardRefWithAs<BadgeProps, HTMLSpanElement, "span">(
  (props, ref) => {
    const htmlref = React.useRef<HTMLSpanElement>();
    const {
      position = "top-right",
      variant = "primary",
      size = "md",
      isAttached,
      className,
      ...rest
    } = props;

    const theme = useTheme();
    const badgeStyles = cx(
      theme.badge.base,
      theme.badge.size[size],
      theme.badge.variant[variant],
      isAttached
        ? cx(theme.badge.attached, theme.badge.position[position])
        : "",
      className,
    );

    React.useEffect(() => {
      if (!isAttached) return;
      if (ref && htmlref.current) {
        const parentElement = htmlref.current?.parentElement;
        parentElement!.classList.add("relative");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Box
        as="span"
        ref={innerRef => {
          ref = innerRef;
          htmlref.current = innerRef;
        }}
        className={badgeStyles}
        {...rest}
      />
    );
  },
);

Badge.displayName = "Badge";
