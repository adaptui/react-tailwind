import React from "react";

import theme from "../theme";
import { ocx } from "../utils";
import { forwardRefWithAs, PropsWithAs } from "../utils/types";

export type TagProps = {
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
  postfix?: React.ReactElement;
};

function TagComponent(
  props: PropsWithAs<TagProps, "span">,
  ref: React.Ref<HTMLSpanElement>,
) {
  const { size = "md", prefix, postfix, className, children, ...rest } = props;
  const tagStyles = ocx(theme.tag.base, theme.tag.size[size], className);

  const TagWithPrefixPostfix = () => (
    <>
      {prefix && <span className={theme.tag.prefix}>{prefix}</span>}
      {children}
      {postfix && <span className={theme.tag.postfix}>{postfix}</span>}
    </>
  );

  return (
    <span ref={ref} className={tagStyles} {...rest}>
      <TagWithPrefixPostfix />
    </span>
  );
}

export const Tag = forwardRefWithAs<TagProps, "span">(TagComponent);
