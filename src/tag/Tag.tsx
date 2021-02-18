import React from "react";
import { cx } from "@renderlesskit/react";
import { Clickable, CompositeItem } from "reakit";

import { useTheme } from "../theme";
import { CloseIcon } from "../icons";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs } from "../utils/types";
import { useTagGroup } from "./TagGroup";

export type TagProps = Omit<BoxProps, "prefix"> & {
  /**
   * id for the tag
   */
  id?: string;
  /**
   * How large should the tag be?
   *
   * @default "md"
   */
  size?: keyof Renderlesskit.GetThemeValue<"tag", "size">;
  /**
   * How the tag should be styled?
   *
   * @default "primary"
   */
  variant?: keyof Renderlesskit.GetThemeValue<"button", "variant">;
  /**
   * If added, tag will show prefix the content before the tag's label
   */
  prefix?: React.ReactElement;
  /**
   * Is tag closable?
   *
   * @default false
   */
  closable?: boolean;
  /**
   * If added, tag will show suffix after the tag's label.
   * NOTE: This will only show if closable is set to `true`
   */
  suffix?: React.ReactElement;
  /**
   * Callback to fire when close icon is clicked?
   */
  onClose?: (id?: string) => void;
};

export const Tag = forwardRefWithAs<TagProps, HTMLSpanElement, "span">(
  (props, ref) => {
    const {
      id,
      size,
      variant,
      prefix,
      suffix = <CloseIcon />,
      closable = false,
      onClose,
      className,
      children,
      ...rest
    } = props;

    const group = useTagGroup();
    const _size = size || group?.size || "md";
    const _variant = variant || group?.variant || "primary";

    const theme = useTheme();
    const tagStyles = cx(
      theme.tag.base,
      theme.tag.size[_size],
      theme.tag.variant[_variant],
      className,
    );

    // TODO: Clean this up
    if (
      !closable &&
      suffix.type.displayName !== (CloseIcon as any).displayName
    ) {
      console.warn(
        "Tag: `suffix` will not be visible because `closable` is set to false, please set `closable` to true",
      );
    }

    return (
      <Box as="span" ref={ref} className={tagStyles} {...rest}>
        {prefix && (
          <Box as="span" className={theme.tag.prefix[_size]}>
            {prefix}
          </Box>
        )}
        {children}
        {closable && suffix && (
          <ClosableElement handleClick={() => onClose?.(id)}>
            {suffix}
          </ClosableElement>
        )}
      </Box>
    );
  },
);

Tag.displayName = "Tag";

export type ClosableElementProps = Pick<TagProps, "size"> & {
  handleClick?: () => void;
};

export const ClosableElement = forwardRefWithAs<
  ClosableElementProps,
  HTMLButtonElement,
  "button"
>((props, ref) => {
  const { handleClick, size, className, children, ...rest } = props;
  const group = useTagGroup();
  const _composite = group?.composite || {};
  const _size = size || group?.size || "sm";

  const theme = useTheme();
  const closableElementStyles = cx(theme.tag.suffix[_size], className);

  return (
    <CompositeItem
      aria-label="close"
      data-testid="testid-close-element"
      as={Clickable}
      ref={ref}
      onClick={handleClick}
      className={closableElementStyles}
      {..._composite}
      {...rest}
    >
      {children}
    </CompositeItem>
  );
});

ClosableElement.displayName = "ClosableElement";
