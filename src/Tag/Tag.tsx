import React from "react";
import { Clickable, CompositeItem, CompositeStateReturn } from "reakit";

import theme from "../theme";
import { ocx } from "../utils";
import { CrossIcon } from "../icons";
import { forwardRefWithAs, PropsWithAs } from "../utils/types";

export const TagsContext = React.createContext<CompositeStateReturn | null>(
  null,
);
export const useTagsContext = () => {
  return React.useContext(TagsContext);
};

export type TagProps = {
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
   * If added, the button will show an icon before the button's label.
   */
  prefix?: React.ReactElement;
  /**
   * If added, the button will show an icon before the button's label.
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
    <span ref={ref} className={tagStyles} {...rest}>
      <TagWithPrefixSuffix />
    </span>
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
