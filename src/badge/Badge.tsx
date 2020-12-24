import tw from "../../tailwindclass.macro";
import React from "react";
import { Box, BoxProps } from "../box/Box";

import { ocx } from "../utils";
import { forwardRefWithAs, PropsWithAs } from "../utils/types";

type Variants = "primary" | "secondary" | "outline";

export type BadgeProps = BoxProps & {
  /**
   * badge variants
   *
   * @default "primary"
   */
  variant?: Variants;
  /**
   * How large should the button be?
   *
   * @default "sm"
   */
  size?: "xs" | "sm" | "md" | "lg";
};

function BadgeComponent(
  props: PropsWithAs<BadgeProps, "span">,
  ref: React.Ref<HTMLButtonElement>,
) {
  const {
    variant = "primary",
    size = "sm",
    children,
    className,
    ...rest
  } = props;

  const badgeStyles = ocx(
    tw("components.badge.base"),
    tw("components.badge.size")[size],
    tw("components.badge.variant")[variant],
    className,
  );

  return (
    <Box as="span" ref={ref} className={badgeStyles} {...rest}>
      {children}
    </Box>
  );
}

export const Badge = forwardRefWithAs<BadgeProps, "span">(BadgeComponent);
