import React from "react";
import { Clickable, CompositeItem, CompositeStateReturn } from "reakit";

import theme from "../theme";
import { ocx } from "../utils";
import { CrossIcon } from "../icons";
import { Box, BoxProps } from "../box";
import { forwardRefWithAs, PropsWithAs } from "../utils/types";

export const TagsContext = React.createContext<CompositeStateReturn | null>(
  null,
);
export const useTagsContext = () => {
  return React.useContext(TagsContext);
};

export type TagProps = Omit<BoxProps, "prefix"> & {
  /**
   * id for the tag
   */
  id?: string;
  /**
   * Is tag closable?
   */
  closable?: boolean;
  /**
   * Callback to fire when close icon is clicked?
   */
  onClose?: (id?: string) => void;
  /**
   * How large should the button be?
   */
  size?: "xs" | "sm" | "md" | "lg";
  /**
   * If added, tag will show prefix the content before the tag's label
   */
  prefix?: React.ReactElement;
  /**
   * If added, tag will show suffix after the tag's label.
   * NOTE: This will only show if closable is set to `true`
   */
  suffix?: React.ReactElement;
};

function TagComponent(
  props: PropsWithAs<TagProps, "span">,
  ref: React.Ref<HTMLSpanElement>,
) {
  const {
    id,
    size = "md",
    prefix,
    suffix = <CrossIcon />,
    className,
    closable,
    onClose,
    children,
    ...rest
  } = props;
  const tagStyles = ocx(theme.tag.base, theme.tag.size[size], className);

  // TODO: Clean this up
  if (!closable && suffix.type.displayName !== (CrossIcon as any).displayName) {
    console.warn(
      "Tag: `suffix` will not be visible because `closable` is set to false, please set `closable` to true",
    );
  }

  const TagWithPrefixSuffix = () => (
    <>
      {prefix && <span className={theme.tag.prefix}>{prefix}</span>}
      {children}
      {closable && suffix && (
        <ClosableElement handleClick={() => onClose?.(id)}>
          {suffix}
        </ClosableElement>
      )}
    </>
  );

  return (
    <Box as="span" ref={ref} className={tagStyles} {...rest}>
      <TagWithPrefixSuffix />
    </Box>
  );
}

export const Tag = forwardRefWithAs<TagProps, "span">(TagComponent);

const ClosableElement: React.FC<{
  handleClick: () => void;
}> = ({ handleClick, children }) => {
  const composite = useTagsContext();

  return (
    <CompositeItem
      as={Clickable}
      className={theme.tag.suffix}
      onClick={handleClick}
      {...(composite ? composite : {})}
    >
      {children}
    </CompositeItem>
  );
};
