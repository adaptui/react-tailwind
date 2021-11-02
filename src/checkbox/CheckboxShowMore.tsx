import * as React from "react";

import { PlusIcon } from "../icons";
import {
  ShowMore,
  ShowMoreButton,
  ShowMoreContent,
  ShowMoreProps,
} from "../show-more";
import { useTheme } from "../theme";
import { cx, Dict } from "../utils";

import { useCheckboxGroupContext } from "./CheckboxGroupState";

export type CheckboxShowMoreOwnProps = { componentProps?: Dict<any> };

export type CheckboxShowMoreProps = ShowMoreProps & CheckboxShowMoreOwnProps;

export const CheckboxShowMore: React.FC<CheckboxShowMoreProps> = props => {
  const { children, componentProps, direction, ...restProps } = props;
  const contextState = useCheckboxGroupContext();
  const size = contextState?.size || "md";
  const stack = contextState?.stack || direction || "vertical";

  const sizeMap = {
    sm: "sm",
    md: "md",
    lg: "xl",
  } as const;
  const [hasExpandStarted, setHasExpandStarted] = React.useState(false);

  const theme = useTheme("radio");
  const buttonClassName = cx(
    theme.group.showMore.button.base[stack],
    hasExpandStarted ? "" : theme.group.showMore.button.expanded[stack],
  );
  const contentClassName = cx(theme.group.showMore.content[stack]);

  return (
    <ShowMore
      direction={stack}
      onExpandStart={() => setHasExpandStarted(true)}
      onCollapseStart={() => setHasExpandStarted(false)}
      {...restProps}
    >
      {children}
      <ShowMoreContent
        className={contentClassName}
        {...componentProps?.contentProps}
      />
      <ShowMoreButton
        variant="ghost"
        size={sizeMap[size]}
        prefix={<PlusIcon />}
        className={buttonClassName}
        {...componentProps?.buttonProps}
      />
    </ShowMore>
  );
};

CheckboxShowMore.displayName = "CheckboxShowMore";
