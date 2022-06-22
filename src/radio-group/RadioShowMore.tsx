import * as React from "react";

import { PlusIcon } from "../icons";
import {
  ShowMoreButton,
  ShowMoreContent,
  ShowMoreProps,
  useShowMoreProps,
} from "../show-more";
import { useTheme } from "../theme";
import { cx, passProps } from "../utils";

import { RadioGroupUIProps } from "./RadioGroupProps";

export type RadioShowMoreProps = ShowMoreProps &
  Partial<RadioGroupUIProps> & {};

export const RadioShowMore: React.FC<RadioShowMoreProps> = ({
  state,
  size,
  themeColor,
  stack = "horizontal",
  maxVisibleItems,
  prefix,
  ...props
}) => {
  const { buttonProps, contentProps } = useShowMoreProps(props);
  const children = contentProps.children as React.ReactNode;

  const [hasExpandStarted, setHasExpandStarted] = React.useState(false);
  const finalChildren = React.Children.map(children, child => {
    return passProps(child, { disabled: hasExpandStarted ? false : true });
  });

  const theme = useTheme("radioGroup");
  const buttonClassName = cx(
    theme.showMore.button.common[stack],
    hasExpandStarted ? "" : theme.showMore.button.expanded[stack],
  );
  const contentClassName = cx(theme.showMore.content[stack]);

  return (
    <>
      <ShowMoreContent
        className={contentClassName}
        onExpandStart={() => setHasExpandStarted(true)}
        onCollapseStart={() => setHasExpandStarted(false)}
        {...contentProps}
        children={finalChildren}
      />
      <ShowMoreButton
        variant="ghost"
        size={size}
        themeColor={themeColor}
        prefix={<PlusIcon />}
        className={buttonClassName}
        {...buttonProps}
      />
    </>
  );
};

RadioShowMore.displayName = "RadioShowMore";
