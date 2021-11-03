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
  console.log("%cchildren", "color: #9c66cc", children);
  const contextState = useRadioGroupContext();
  const size = contextState?.size || "md";
  const stack = contextState?.stack || direction || "vertical";
  const sizeMap = {
    sm: "sm",
    md: "md",
    lg: "xl",
  } as const;
  const [hasExpandStarted, setHasExpandStarted] = React.useState(false);
  console.log("%chasExpandStarted", "color: #ace2e6", hasExpandStarted);

  const theme = useTheme("radio");
  const buttonClassName = cx(
    theme.group.showMore.button.base[stack],
    hasExpandStarted ? "" : theme.group.showMore.button.expanded[stack],
  );
  const contentClassName = cx(theme.group.showMore.content[stack]);

  const finalChildren = React.Children.map(children, child => {
    return passProps(child, { disabled: hasExpandStarted ? false : true });
  });

  return (
    <ShowMore
      direction={stack}
      onExpandStart={() => setHasExpandStarted(true)}
      onCollapseStart={() => setHasExpandStarted(false)}
      {...restProps}
    >
      {finalChildren}
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

RadioShowMore.displayName = "RadioShowMore";
