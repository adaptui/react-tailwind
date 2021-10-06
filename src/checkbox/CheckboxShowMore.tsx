import * as React from "react";
import { cx } from "@renderlesskit/react";

import { PlusIcon } from "../icons";
import {
  ShowMore,
  ShowMoreButton,
  ShowMoreContent,
  ShowMoreProps,
} from "../show-more/ShowMore";
import { useTheme } from "../theme";
import { Dict } from "../utils/types";

import { useCheckboxStateContext } from "./CheckboxGroupState";

export type CheckboxShowMoreOwnProps = { componentProps?: Dict<any> };

export type CheckboxShowMoreProps = ShowMoreProps & CheckboxShowMoreOwnProps;

export const CheckboxShowMore: React.FC<CheckboxShowMoreProps> = props => {
  const { children, componentProps, direction, ...restProps } = props;
  const contextState = useCheckboxStateContext();
  const size = contextState?.size || "md";
  const sizeMap = {
    sm: "sm",
    md: "md",
    lg: "xl",
  } as const;
  const [hasExpandStarted, setHasExpandStarted] = React.useState(false);

  const theme = useTheme("radio");
  const buttonClassName = cx(
    theme.group.showMore.button.base[contextState.stack],
    hasExpandStarted
      ? ""
      : theme.group.showMore.button.expanded[contextState.stack],
  );
  const contentClassName = cx(theme.group.showMore.content[contextState.stack]);

  return (
    <ShowMore
      direction={contextState.stack || direction}
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
