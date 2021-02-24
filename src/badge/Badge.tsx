import React from "react";
import { cx } from "@renderlesskit/react";

import { useTheme } from "../theme";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { useMergeRefs } from "../hooks/useMergeRefs";

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
  /**
   * floats the badge on parent element's corners
   *
   * @default false
   */
  floating?: boolean;
  /**
   * floating position
   *
   * @default "top-right"
   */
  position?: keyof Renderlesskit.GetThemeValue<"badge", "position">;
};

export const Badge = forwardRefWithAs<BadgeProps, HTMLSpanElement, "span">(
  (props, ref) => {
    const htmlref = React.useRef<HTMLSpanElement>();
    const {
      position = "top-right",
      variant = "primary",
      size = "md",
      floating = false,
      className,
      ...rest
    } = props;

    const theme = useTheme();
    const badgeStyles = cx(
      theme.badge.base,
      theme.badge.size[size],
      theme.badge.variant[variant],
      floating
        ? cx(
            theme.badge.attached,
            theme.badge.position[position],
            !props.children ? theme.badge.dot[size] : "",
          )
        : "",
      className,
    );

    React.useEffect(() => {
      if (!floating) return;
      if (htmlref && htmlref.current) {
        const parentElement = htmlref.current?.parentElement;
        parentElement!.classList.add(theme.badge.attachedParent);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Box
        as="span"
        ref={useMergeRefs(htmlref, ref)}
        className={badgeStyles}
        {...rest}
      />
    );
  },
);

Badge.displayName = "Badge";
