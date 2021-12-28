import * as React from "react";

import { PlusIcon } from "../icons";
import {
  ShowMore,
  ShowMoreButton,
  ShowMoreContent,
  ShowMoreProps,
} from "../show-more";
import { useTheme } from "../theme";
import { cx, Dict, passProps } from "../utils";

import { useRadioGroupContext } from "./RadioGroupState";

export type RadioShowMoreOwnProps = { componentProps?: Dict<any> };

export type RadioShowMoreProps = ShowMoreProps & RadioShowMoreOwnProps;

export const RadioShowMore: React.FC<RadioShowMoreProps> = props => {
  const { children, componentProps, direction, ...restProps } = props;
  const contextState = useRadioGroupContext();
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
    theme.group.showMore.button.common[stack],
    size === "lg" ? theme.group.showMore.button.lg : "",
  );
  const contentClassName = cx(
    theme.group.showMore.content[stack],
    hasExpandStarted ? "" : theme.group.showMore.button.expanded[stack],
  );

  const finalChildren = React.Children.map(children, child => {
    return passProps(child, {
      disabled: hasExpandStarted ? false : true,
    });
  });

  return (
    <ShowMore direction={stack} {...restProps}>
      {finalChildren}
      <ShowMoreContent
        className={contentClassName}
        onExpandStart={() => setHasExpandStarted(true)}
        onCollapseStart={() => setHasExpandStarted(false)}
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

RadioShowMore.displayName = "RadioShowMore";
