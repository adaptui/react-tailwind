import * as React from "react";

import { PlusIcon } from "../icons";
import {
  ShowMore,
  ShowMoreButton,
  ShowMoreButtonProps,
  ShowMoreContent,
  ShowMoreContentProps,
} from "../show-more";
import { useTheme } from "../theme";
import { cx, passProps } from "../utils";

import { CheckboxGroupUIProps } from "./CheckboxGroupProps";

export type CheckboxShowMoreProps = {
  contentProps: ShowMoreContentProps;
  buttonProps: ShowMoreButtonProps;
  uiProps: CheckboxGroupUIProps;
  moreChildren: React.ReactNode;
};

export const CheckboxShowMore: React.FC<CheckboxShowMoreProps> = props => {
  const { contentProps, moreChildren, buttonProps, uiProps } = props;
  const { stack, size } = uiProps;

  const [hasExpandStarted, setHasExpandStarted] = React.useState(false);

  const theme = useTheme("checkbox");
  const buttonClassName = cx(
    theme.group.showMore.button.common[stack],
    size === "lg" ? theme.group.showMore.button.lg : "",
    hasExpandStarted ? "" : theme.group.showMore.button.expanded[stack],
  );
  const contentClassName = cx(theme.group.showMore.content[stack]);

  const finalChildren = React.Children.map(moreChildren, child => {
    return passProps(child, { disabled: hasExpandStarted ? false : true });
  });

  return (
    <ShowMore direction={stack}>
      {finalChildren}
      <ShowMoreContent
        className={contentClassName}
        onExpandStart={() => setHasExpandStarted(true)}
        onCollapseStart={() => setHasExpandStarted(false)}
        {...contentProps}
      />
      <ShowMoreButton
        variant="ghost"
        size={size}
        prefix={<PlusIcon />}
        className={buttonClassName}
        {...buttonProps}
      />
    </ShowMore>
  );
};

CheckboxShowMore.displayName = "CheckboxShowMore";
